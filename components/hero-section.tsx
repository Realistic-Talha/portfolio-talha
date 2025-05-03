"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Mouse, Laptop, FileCode, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { HeroParticles } from "@/components/hero-particles"
import { SequentialTypewriter } from "@/components/ui/sequential-typewriter"
import { MouseScrollIndicator } from "@/components/ui/mouse-scroll-indicator"

// Custom Upwork icon
const UpworkIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.281-2.389 5.281-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.688 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("section#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  const scrollToContact = () => {
    const contactSection = document.querySelector("section#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh+10rem)] flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "25vh", paddingBottom: "5vh" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50" style={{ zIndex: 1 }}></div>
        
        <motion.div 
          className="absolute top-1/4 left-[20%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] optimize-animation" 
          animate={{ 
            x: [0, 20, 0],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror" 
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-[20%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" 
          animate={{ 
            x: [0, -20, 0],
            opacity: [0.2, 0.3, 0.2]  
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-[30%] w-80 h-80 bg-primary/20 rounded-full blur-[100px]" 
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.15, 0.25, 0.15]  
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="absolute inset-0 z-0 opacity-70">
        <HeroParticles />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-1 lg:order-1 flex justify-center mb-8 sm:mb-12 lg:mb-0 mt-32 sm:mt-36 md:mt-24 lg:mt-0"
          >
            <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] mx-auto">
              <motion.div 
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
              />
              
              <div className="relative w-full h-full z-10 group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="absolute w-full h-full rounded-full border border-primary/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ boxShadow: "0 0 15px rgba(var(--primary), 0.15)" }}
                  />
                  <motion.div 
                    className="absolute w-[110%] h-[110%] rounded-full border border-purple-500/10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    style={{ boxShadow: "0 0 15px rgba(139, 92, 246, 0.1)" }}
                  />
                  <motion.div 
                    className="absolute w-[120%] h-[120%] rounded-full border border-blue-500/10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.1)" }}
                  />
                </div>
                
                <motion.div 
                  className="absolute -inset-6 bg-gradient-to-tr from-primary/10 via-purple-500/5 to-transparent rounded-full opacity-80"
                  animate={{ 
                    opacity: [0.6, 0.8, 0.6],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(var(--primary),0.3)] overflow-hidden z-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/80 to-background/50 backdrop-blur-md z-10"></div>
                  
                  <div className="absolute inset-2 rounded-full border-2 border-primary/40 overflow-hidden z-20 backdrop-blur-sm shadow-[inset_0_0_25px_rgba(var(--primary),0.4)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(var(--primary),0.15)_1px,transparent_1px)] bg-[size:8px_8px] opacity-50 z-10"></div>
                    
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-purple-500/10 opacity-70 z-20 
                                transition-opacity duration-700"
                      animate={{ 
                        background: ['linear-gradient(to top left, rgba(var(--primary), 0.1), rgba(139, 92, 246, 0.1))', 
                                    'linear-gradient(to top left, rgba(139, 92, 246, 0.1), rgba(var(--primary), 0.1))', 
                                    'linear-gradient(to top left, rgba(var(--primary), 0.1), rgba(139, 92, 246, 0.1))']
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                      whileHover={{ opacity: 0.9 }}
                    />
                    
                    <div className="relative w-full h-full rounded-full overflow-hidden z-30">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-purple-500/15"></div>
                      
                      <motion.img
                        src="/Profile-Display-removebg.png"
                        alt="Talha's Profile"
                        className="absolute inset-0 w-full h-full object-contain scale-[0.9] object-center z-40 transition-all duration-700 ease-out 
                                  filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                        style={{ mixBlendMode: 'normal' }}
                        whileHover={{ scale: 0.95 }}
                        animate={{ 
                          y: [10, 5, 10], // Changed from [0, -5, 0] to position it lower
                        }}
                        transition={{ 
                          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        }}
                      />
                      
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent z-50 opacity-0 transition-opacity duration-500"
                        animate={{ opacity: [0, 0.2, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 overflow-visible pointer-events-none">
                  {[...Array(7)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        top: `${15 + i * 12}%`,
                        left: `${8 + i * 16}%`,
                        width: `${i % 3 === 0 ? 8 : 5}px`,
                        height: `${i % 3 === 0 ? 8 : 5}px`,
                        backgroundColor: i % 3 === 0 ? 'rgb(var(--primary))' : i % 3 === 1 ? 'rgb(139, 92, 246)' : 'rgb(59, 130, 246)',
                        opacity: 0.4,
                      }}
                      animate={{
                        y: [0, i % 2 === 0 ? -15 : -10, 0],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
                
                <motion.div 
                  className="absolute -left-4 top-1/4 w-12 h-12 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-lg flex items-center justify-center p-2 z-40
                            border border-white/30 dark:border-white/10 shadow-[0_8px_16px_rgba(0,0,0,0.1)]"
                  animate={{ 
                    y: [0, -8, 0],
                    rotateZ: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  <Code className="h-7 w-7 text-blue-500" />
                </motion.div>

                <motion.div 
                  className="absolute -right-4 top-1/3 w-12 h-12 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-lg flex items-center justify-center p-2 z-40
                            border border-white/30 dark:border-white/10 shadow-[0_8px_16px_rgba(0,0,0,0.1)]"
                  animate={{ 
                    y: [0, 8, 0],
                    rotateZ: [0, -5, 0, 5, 0]
                  }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.15, rotate: -5 }}
                >
                  <Laptop className="h-7 w-7 text-gray-700 dark:text-gray-300" />
                </motion.div>

                <motion.div 
                  className="absolute left-1/4 -bottom-4 w-12 h-12 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-lg flex items-center justify-center p-2 z-40
                            border border-white/30 dark:border-white/10 shadow-[0_8px_16px_rgba(0,0,0,0.1)]"
                  animate={{ 
                    y: [0, -6, 0],
                    rotateZ: [0, 3, 0, -3, 0]
                  }}
                  transition={{ 
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                  }}
                  whileHover={{ scale: 1.15, rotate: 3 }}
                >
                  <FileCode className="h-7 w-7 text-blue-600" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 order-2 lg:order-2 text-center lg:text-left"
          >
            <div className="space-y-6 max-w-xl mx-auto lg:ml-0">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Hi, I'm <motion.span 
                          className="text-primary"
                          animate={{ 
                            color: ['hsl(var(--primary))', 'hsl(var(--primary) / 0.9)', 'hsl(var(--primary))']
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >Talha</motion.span>.
                <motion.span 
                  className="block mt-2 text-gradient"
                  initial={{ backgroundSize: '100%' }}
                  animate={{ backgroundSize: ['100%', '200%', '100%'] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent',
                    backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(265 89% 78%), hsl(var(--primary)))',
                    backgroundSize: '200%',
                    display: 'inline-block'
                  }}
                >Creating digital experiences</motion.span>
                <span className="block mt-2">that make an impact</span>
              </motion.h1>
              
              <div className="h-14 flex items-center justify-center lg:justify-start">
                <div className="sequential-typewriter-wrapper">
                  <SequentialTypewriter />
                </div>
              </div>
              
              <motion.p 
                className="text-muted-foreground text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                I build accessible, user-friendly websites and applications 
                that solve real-world problems through clean code and creative thinking.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-4 pt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button 
                  size="default" 
                  className="rounded-full group relative overflow-hidden px-3 sm:px-4 md:px-6 max-w-[140px] sm:max-w-[160px] md:max-w-none"
                  onClick={scrollToProjects}
                >
                  <span className="relative z-10">Explore My Work</span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 z-0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="default" 
                  variant="outline" 
                  className="rounded-full border-primary/50 hover:border-primary transition-colors px-3 sm:px-4 md:px-6 max-w-[140px] sm:max-w-[160px] md:max-w-none"
                  onClick={scrollToContact}
                >
                  Get in Touch
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {[
                  { icon: <Github className="h-5 w-5" />, href: "https://github.com/Realistic-Talha" },
                  { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/realistictalha/" },
                  { icon: <UpworkIcon />, href: "https://www.upwork.com/freelancers/~01ee06643da7b31d7b?mp_source=share" },
                  { icon: <Mail className="h-5 w-5" />, href: "mailto:talhayameen98@gmail.com" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.5 } 
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Place the style outside of the nested components */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .sequential-typewriter-wrapper :global(.flex) {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

