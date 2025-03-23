"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TechIcons } from "@/components/tech-icons"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center">
            My <span className="text-gradient">Technical Skills</span>
          </h2>

          <p className="text-center text-muted-foreground max-w-2xl mt-6">
            I'm currently looking to join a <span className="text-primary font-medium">cross-functional</span> team that
            values improving people's lives through accessible design
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full h-[500px] flex justify-center"
        >
          <TechIcons />
        </motion.div>
      </div>
    </section>
  )
}

