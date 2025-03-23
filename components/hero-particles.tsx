"use client"

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isDark = theme === 'dark'
    
    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Particle settings
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)
    const particles: Particle[] = []
    
    class Particle {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
      
      constructor() {
        // Use non-null assertion operator since we've checked canvas exists
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.radius = Math.random() * 2 + 1
        this.color = isDark ? 
          `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})` : 
          `rgba(0, 0, 0, ${Math.random() * 0.1 + 0.05})`
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
      }
      
      update() {
        this.x += this.speedX
        this.y += this.speedY
        
        // Use non-null assertion operator
        if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1
      }
      
      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }
    
    // Draw connections between particles
    function drawConnections() {
      if (!ctx) return
      const connectionDistance = 100
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.strokeStyle = isDark ? 
              `rgba(255, 255, 255, ${0.1 * (1 - distance / connectionDistance)})` : 
              `rgba(0, 0, 0, ${0.05 * (1 - distance / connectionDistance)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }
    
    // Animation loop
    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }
      
      drawConnections()
      requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [theme])
  
  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.8 }} />
}
