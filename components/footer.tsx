"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary rounded-lg rotate-45 opacity-80"></div>
              <span className="relative text-white font-bold text-lg">T</span>
            </div>
            <span className="font-poppins font-bold text-lg">
              Talha<span className="text-primary">.</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <Link href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Talha Yameen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

