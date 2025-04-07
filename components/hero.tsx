"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay - Optimized Approach */}
      <div className="absolute inset-0 z-0">
        <Image
          src="hero-image.jpeg"
          alt="Debate Academy Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Brisbane&apos;s Leading Debate Coaching Academy
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering students to think critically, speak confidently, and succeed academically through expert debate
          coaching.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={scrollToContact}
            className="bg-white text-[#123458] hover:bg-[#D4C9BE] hover:text-[#030303] text-lg px-8 py-6"
            size="lg"
          >
            Enquire Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}