"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, MessageSquare, GraduationCap, Trophy, ChevronLeft, ChevronRight } from "lucide-react"

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

export default function BenefitsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const benefits: Benefit[] = [
    {
      icon: <Brain className="text-white h-6 w-6" />,
      title: "Critical Thinking That Lasts a Lifetime",
      description:
        "Debate coaching teaches students to think deeply, challenge assumptions, and analyse ideas from every angle — skills that go far beyond the classroom.",
    },
    {
      icon: <MessageSquare className="text-white h-6 w-6" />,
      title: "Confidence in Public Speaking",
      description:
        "With structured practice and personalised feedback, students gain the tools to speak clearly, persuasively, and without fear — in front of any audience.",
    },
    {
      icon: <GraduationCap className="text-white h-6 w-6" />,
      title: "Sharper Academic & Career Success",
      description:
        "Debaters write stronger essays, lead better discussions, and outperform peers in interviews, university applications, and leadership roles.",
    },
    {
      icon: <Trophy className="text-white h-6 w-6" />,
      title: "Competitive Edge in Debating & Beyond",
      description:
        "Whether it's QDU rounds, international competitions, or school selections — our coaching gives students a strategic edge to perform at their best and stand out.",
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length)
  }, [benefits.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + benefits.length) % benefits.length)
  }, [benefits.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-rotate carousel every 6 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide()
      }, 6000)

      return () => clearInterval(interval)
    }
  }, [isPaused, nextSlide])

  return (
    <div
      className="relative py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-[#123458] rounded-xl overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>
      </div>

      <div className="relative z-10">
        <div className="relative h-[500px] sm:h-[450px] md:h-[400px] lg:h-[350px] max-w-3xl mx-auto"> {/* Reduced max-width */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Card className="bg-white border-[#D4C9BE] h-full flex flex-col mx-4"> {/* Added horizontal margin */}
                <CardHeader className="flex flex-col items-center gap-4 pb-4 pt-8 px-6">
                  <div className="w-16 h-16 bg-[#123458] rounded-full flex items-center justify-center">
                    {benefits[currentIndex].icon}
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-[#123458] text-center px-2"> {/* Added horizontal padding */}
                    {benefits[currentIndex].title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between px-6 pb-8">
                  <div className="space-y-4 px-2"> {/* Added horizontal padding */}
                    <p className="text-[#030303] text-base md:text-lg text-center">
                      {benefits[currentIndex].description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col items-center gap-6">
                    <div className="flex space-x-2">
                      {benefits.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#123458]" : "bg-[#D4C9BE]"}`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    <Button
                      onClick={scrollToContact}
                      className="bg-[#123458] hover:bg-[#030303] w-full sm:w-[200px] py-6 text-base"
                    >
                      ENQUIRE NOW
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows - moved further out */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#123458] p-2 rounded-full shadow-lg z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#123458] p-2 rounded-full shadow-lg z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}