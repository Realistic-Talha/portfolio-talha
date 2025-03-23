"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { Download } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
  ]

  return (
    <section id="about" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center">
            Know More <span className="text-gradient">About Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden gradient-border">
              <Image src="/developer-illustration.svg" alt="About Me" fill className="object-cover" />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 md:right-0 glass px-6 py-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  5+
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Years of</p>
                  <p className="font-bold">Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              I'm a Flutter Developer with a passion for creating beautiful, functional applications
            </h3>

            <p className="text-muted-foreground mb-6">
              Currently, I'm a Software Engineer at <span className="text-primary font-medium">DEVCIR</span>, where I
              work on developing innovative mobile and web applications.
            </p>

            <p className="text-muted-foreground mb-8">
              I specialize in Flutter development and have a strong foundation in frontend technologies. My approach
              combines technical expertise with an eye for design, ensuring that the applications I build are not only
              functional but also provide an exceptional user experience.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="card-blur p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button variant="gradient" size="lg" className="rounded-full">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

