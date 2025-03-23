"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Twitter, ChevronDown, Mouse, Laptop, FileCode, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { HeroParticles } from "@/components/hero-particles"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const words = [
    { text: "Build." },
    { text: "Design." },
    { text: "Develop." },
    { text: "Deploy." },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-24">
      {/* Gradient background elements - contained better */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50" style={{ zIndex: 1 }}></div>
        {/* Adjusted positioning of background blurs to prevent overflow */}
        <div className="absolute top-1/4 left-[20%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" style={{ transform: `translateY(${scrollY * 0.2}px)` }}></div>
        <div className="absolute top-1/3 right-[20%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" style={{ transform: `translateY(${scrollY * -0.2}px)` }}></div>
      </div>
      
      {/* Interactive particles background */}
      <div className="absolute inset-0 z-0">
        <HeroParticles />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left side with image - takes 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-end"
          >
            {/* Decorative elements */}
            <div className="relative">
              {/* Background blurs */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px]"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px]"></div>
              
              {/* Image container - completely redesigned with premium styling */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 z-10 group">
                {/* Orbital animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-full h-full rounded-full border border-primary/20 animate-[spin_25s_linear_infinite]"></div>
                  <div className="absolute w-[110%] h-[110%] rounded-full border border-purple-500/10 animate-[spin_30s_linear_infinite_reverse]"></div>
                  <div className="absolute w-[120%] h-[120%] rounded-full border border-blue-500/10 animate-[spin_20s_linear_infinite]"></div>
                </div>
                
                {/* Background glow effects */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-primary/10 via-purple-500/5 to-transparent rounded-full opacity-80 animate-pulse-slow"></div>
                
                {/* Main frame with premium 3D effect */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(var(--primary),0.2)] overflow-hidden z-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/80 to-background/50 backdrop-blur-md z-10"></div>
                  
                  {/* Inner glowing ring */}
                  <div className="absolute inset-2 rounded-full border-2 border-primary/30 overflow-hidden z-20 backdrop-blur-sm
                                 shadow-[inset_0_0_20px_rgba(var(--primary),0.3)]">
                    {/* Decorative pattern overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(var(--primary),0.1)_1px,transparent_1px)] bg-[size:8px_8px] opacity-50 z-10"></div>
                    
                    {/* Interactive gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-purple-500/5 opacity-70 z-20 
                                   group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Profile image with special effects */}
                    <div className="relative w-full h-full rounded-full overflow-hidden z-30">
                      {/* Image background effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-purple-500/10"></div>
                      
                      {/* Profile image with enhanced styling */}
                      <img
                        src="/Profile-Display-removebg.png"
                        alt="Talha's Profile"
                        className="absolute inset-0 w-full h-full object-contain scale-[0.9] object-center z-40 transition-all duration-700 ease-out 
                                  translate-y-[10%] group-hover:scale-[0.95] filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]"
                        style={{ mixBlendMode: 'normal' }}
                      />
                      
                      {/* Overlay lighting effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-visible pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute rounded-full w-${1 + (i % 2)} h-${1 + (i % 2)} bg-primary/40`}
                      style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
                
                {/* Tech badges with enhanced styling - replaced with Lucide icons */}
                <motion.div 
                  className="absolute -left-4 top-1/4 w-12 h-12 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-lg flex items-center justify-center p-2 z-40
                            border border-white/20 dark:border-white/10"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Code className="h-7 w-7 text-blue-500" />
                </motion.div>

                <motion.div 
                  className="absolute -right-4 top-1/3 w-12 h-12 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-lg flex items-center justify-center p-2 z-40
                            border border-white/20 dark:border-white/10"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Laptop className="h-7 w-7 text-gray-700 dark:text-gray-300" />
                </motion.div>

                <motion.div 
                  className="absolute left-1/4 -bottom-4 w-12 h-12 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-lg flex items-center justify-center p-2 z-40
                            border border-white/20 dark:border-white/10"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <FileCode className="h-7 w-7 text-blue-600" />
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side with content - takes 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 lg:col-start-6 order-1 lg:order-2"
          >
            <div className="space-y-5 max-w-xl ml-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Talha</span>.
                <span className="block mt-2 text-gradient">Creating digital experiences</span>
                <span className="block mt-2">that make an impact</span>
              </h1>
              
              <div className="h-14">
                <TypewriterEffect words={words} className="text-lg md:text-xl font-medium" />
              </div>
              
              <p className="text-muted-foreground text-base">
                I build accessible, user-friendly websites and applications 
                that solve real-world problems through clean code and creative thinking.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-1">
                <Button size="default" className="rounded-full group">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="default" variant="outline" className="rounded-full">
                  Get in Touch
                </Button>
              </div>
              
              <div className="flex items-center gap-5">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="mailto:your-email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator - positioned even further down with better visibility */}
        <div className="absolute -bottom-36 left-1/2 transform -translate-x-1/2 z-50">
          <div className="relative h-28">
            {/* Fade gradient effect above the scroll indicator */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-transparent to-primary"></div>
            
            <motion.a 
              href="#about"
              className="flex flex-col items-center bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/50 shadow-md shadow-primary/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              whileHover={{ y: -3 }}
              aria-label="Scroll to About section"
            >
              {/* Mouse emoji at the top - replaced with Mouse icon */}
              <span className="text-base mb-1">
                <Mouse className="h-5 w-5" />
              </span>
              
              {/* Scrolling dots animation - replaced with arrow down */}
              <motion.div 
                animate={{ 
                  y: [0, 3, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop" 
                }}
                className="h-4 overflow-hidden flex justify-center"
              >
                <ChevronDown className="h-4 w-4 opacity-80" />
              </motion.div>
              
              {/* Small scroll down text */}
              {/* <span className="text-[11px] mt-1 uppercase tracking-wider font-medium">scroll down</span> */}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

