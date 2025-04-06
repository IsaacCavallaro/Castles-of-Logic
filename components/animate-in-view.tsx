"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"

interface AnimateInViewProps {
  children: ReactNode
  variants?: {
    hidden: Variant
    visible: Variant
  }
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  threshold?: number
}

export default function AnimateInView({
  children,
  variants,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  threshold = 0.1,
}: AnimateInViewProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  const defaultVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  const selectedVariants = variants || defaultVariants

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          controls.start("visible")
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsInView(false)
          controls.start("hidden")
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [controls, once, threshold])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={selectedVariants} className={className}>
      {children}
    </motion.div>
  )
}

