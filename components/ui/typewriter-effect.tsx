"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimate, useInView } from "framer-motion"
import { useEffect, useState } from "react"

type TypewriterProps = {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: TypewriterProps) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing')
  
  useEffect(() => {
    if (!isInView) return;
    
    let timeout: NodeJS.Timeout;
    
    if (phase === 'typing') {
      if (displayText === words[currentIndex].text) {
        // Wait before starting to delete
        timeout = setTimeout(() => {
          setPhase('deleting');
        }, 2000);
      } else {
        // Add next character
        timeout = setTimeout(() => {
          setDisplayText(words[currentIndex].text.substring(0, displayText.length + 1));
        }, 150);
      }
    } else {
      if (displayText === "") {
        // Move to next word
        setPhase('typing');
        setCurrentIndex((currentIndex + 1) % words.length);
      } else {
        // Remove last character
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 100);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [isInView, displayText, currentIndex, phase, words]);
  
  return (
    <div className={cn("flex items-center", className)}>
      <div ref={scope} className="inline-block">
        <motion.span 
          className={words[currentIndex].className}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {displayText}
        </motion.span>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block h-6 w-[2px] bg-primary rounded-full ml-1",
          cursorClassName
        )}
      ></motion.span>
    </div>
  )
}
