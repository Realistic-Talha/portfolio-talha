"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Enhanced project data
const projects = [
  {
    id: 1,
    title: "Spotify Data Visualizer",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, and detailed audio information with interactive charts.",
    image: "/project-screenshot.png",
    category: "web",
    technologies: ["React", "Node.js", "Spotify API", "Tailwind CSS", "Chart.js"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app to help users organize tasks, set priorities, and track progress with real-time updates and collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Provider", "Material UI"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Redesign",
    description:
      "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization with A/B testing results showing 35% increased engagement.",
    image: "/placeholder.svg?height=400&width=600",
    category: "design",
    technologies: ["Figma", "Adobe XD", "Illustrator", "Prototyping"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time forecasts and historical weather data visualization with interactive maps and alerts.",
    image: "/placeholder.svg?height=400&width=600",
    category: "web",
    technologies: ["React", "Chart.js", "Weather API", "Styled Components", "Mapbox"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized insights and progress visualization.",
    image: "/placeholder.svg?height=400&width=600",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Health API", "BLoC Pattern"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with dark/light mode, animations, and responsive design.",
    image: "/placeholder.svg?height=400&width=600",
    category: "web",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    demoUrl: "#",
    codeUrl: "#",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "UI/UX" },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Filter and sort projects
  const filteredProjects = projects
    .filter((project) => {
      const matchesCategory = activeCategory === "all" || project.category === activeCategory
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === "newest") return b.id - a.id
      if (sortBy === "oldest") return a.id - b.id
      if (sortBy === "featured") return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      return 0
    })

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const regularProjects = filteredProjects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Recent Projects</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Explore my latest work across web development, mobile apps, and UI/UX design.
            Each project represents a unique challenge and solution.
          </p>

          {/* Search and filter controls */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="w-full md:w-auto flex-1 max-w-md">
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSortBy("newest")}>Newest</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("oldest")}>Oldest</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("featured")}>Featured</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    size="sm"
                    className="whitespace-nowrap"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Display "no projects found" message if needed */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found matching your search criteria.</p>
          </div>
        )}

        {/* Featured projects (larger cards) */}
        {featuredProjects.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">Featured Projects</h3>
            <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  label={categories.find(c => c.id === project.category)?.label || project.category}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.image}
                  projectUrl={project.demoUrl}
                  githubUrl={project.codeUrl}
                  technologies={project.technologies}
                  featured={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular projects */}
        {regularProjects.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-6">All Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  label={categories.find(c => c.id === project.category)?.label || project.category}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.image}
                  projectUrl={project.demoUrl}
                  githubUrl={project.codeUrl}
                  technologies={project.technologies}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <Button variant="gradient" size="lg" className="rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

