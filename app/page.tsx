"use client";

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Programs from "@/components/programs"
import Benefits from "@/components/benefits"
import About from "@/components/about"
import WhyChoose from "@/components/why-choose"
import Faqs from "@/components/faqs"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1EFEC]">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Benefits />
        <About />
        <WhyChoose />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

