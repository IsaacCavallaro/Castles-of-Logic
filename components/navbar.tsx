"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image";
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const header = document.querySelector('header')
        const baseNavbarHeight = header?.clientHeight || 60
        // For mobile, use 80% of the navbar height, or minimum 40px
        const isMobile = window.innerWidth < 768
        const navbarHeight = isMobile ? Math.min(baseNavbarHeight * 0.8, 40) : baseNavbarHeight
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: "smooth"
        })
      }
    }, 100)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#D4C9BE]/95 backdrop-blur-sm shadow-sm" : "bg-[#D4C9BE]"} border-b border-[#D4C9BE]`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* Desktop Logo - hidden on mobile */}
              <Image
                src="/castles-of-logic-logo-cropped.png"
                alt="Castles of Logic Logo"
                width={140}
                height={60}
                className="h-auto hidden md:block"
                priority
              />
              {/* Mobile Logo - hidden on desktop */}
              <Image
                src="/castles-of-logic-logo-mob.png"
                alt="Castles of Logic Logo"
                width={25}
                height={25}
                className="h-auto md:hidden"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("programs")}
              className="text-[#123458] hover:text-[#030303] font-medium"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#123458] hover:text-[#030303] font-medium"
            >
              About Us
            </button>
            <button onClick={() => scrollToSection("faqs")} className="text-[#123458] hover:text-[#030303] font-medium">
              FAQs
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-[#123458] hover:bg-[#030303] text-white">
              Enquire Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#123458] relative z-50" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation - Full Screen Slide-in (moved outside header for better positioning) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 md:hidden bg-[#F1EFEC]/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center"
            style={{ height: "100vh", width: "100vw" }}
          >
            <div className="flex flex-col items-center space-y-8 w-full px-8">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => scrollToSection("programs")}
                className="text-[#123458] hover:text-[#030303] font-medium text-2xl py-2 w-full text-center"
              >
                Programs
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => scrollToSection("about")}
                className="text-[#123458] hover:text-[#030303] font-medium text-2xl py-2 w-full text-center"
              >
                About Us
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToSection("faqs")}
                className="text-[#123458] hover:text-[#030303] font-medium text-2xl py-2 w-full text-center"
              >
                FAQs
              </motion.button>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-xs pt-4"
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#123458] hover:bg-[#030303] text-white w-full py-6 text-lg"
                  size="lg"
                >
                  Enquire Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}