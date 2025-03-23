"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Senior Flutter Developer",
    company: "DEVCIR",
    location: "Lahore, Pakistan",
    period: "2021 - Present",
    description:
      "Leading the development of mobile applications using Flutter. Collaborating with cross-functional teams to define, design, and ship new features.",
  },
  {
    type: "education",
    title: "Master's in Computer Science",
    company: "University of Engineering and Technology",
    location: "Lahore, Pakistan",
    period: "2018 - 2020",
    description: "Specialized in Mobile Application Development and UI/UX Design. Graduated with distinction.",
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Lahore, Pakistan",
    period: "2019 - 2021",
    description:
      "Developed responsive web applications using React and Next.js. Implemented UI components and integrated with backend APIs.",
  },
  {
    type: "education",
    title: "Bachelor's in Software Engineering",
    company: "COMSATS University",
    location: "Lahore, Pakistan",
    period: "2014 - 2018",
    description: "Focused on software development methodologies and programming fundamentals. Graduated with honors.",
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center">
            Education & <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-8">
                  <div
                    className={`card-blur p-6 rounded-xl max-w-md ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      {experience.type === "work" ? (
                        <Briefcase className="h-4 w-4" />
                      ) : (
                        <GraduationCap className="h-4 w-4" />
                      )}
                      <span className="text-sm font-medium">{experience.type === "work" ? "Work" : "Education"}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                    <p className="text-lg font-medium mb-2">{experience.company}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground">{experience.description}</p>
                  </div>
                </div>

                <div className="relative z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  {experience.type === "work" ? (
                    <Briefcase className="h-5 w-5 text-white" />
                  ) : (
                    <GraduationCap className="h-5 w-5 text-white" />
                  )}
                </div>

                <div className="w-full md:w-1/2 md:pl-8 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

