"use client"

import type React from "react"
import { Phone, Mail, ArrowRight } from "lucide-react"
import AnimateInView from "./animate-in-view"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section id="contact" className="py-16 bg-[#123458] text-white relative">
      <div className="container mx-auto px-4">
        <AnimateInView>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Enquire Now</h2>
        </AnimateInView>

        <AnimateInView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left column - Contact info */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <div className="w-16 h-1 bg-white mb-6"></div>
                <p className="mb-8 text-gray-200 leading-relaxed">
                  Ready to take the next step in your debate journey? Contact us directly using the
                  information below or fill out our enrollment form.
                </p>
              </motion.div>

              <div className="space-y-8 mt-4">
                <motion.div
                  className="flex items-center gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                    <Phone className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-gray-200">Call Us</h4>
                    <p className="text-lg font-medium">0412 266 981</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                    <Mail className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-gray-200">Email Us</h4>
                    <p className="text-lg font-medium">tutoring@castlesoflogic.au</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right column - Call to action */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="border border-white/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Enroll?</h3>
                <div className="w-16 h-1 bg-white mb-6"></div>
                <p className="mb-8 text-gray-200 leading-relaxed">
                  Our expert tutors are ready to help you reach your full potential. Fill out our inquiry
                  form and we'll get back to you within 24 hours to discuss your needs.
                </p>

                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="group w-full flex items-center justify-center gap-2 bg-white text-[#123458] font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </AnimateInView>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl w-full max-w-3xl p-4 md:p-6 relative overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>

              <iframe
                className="w-full h-[70vh] md:h-[75vh] lg:h-[92vh] rounded-md border-0"
                src="https://sibforms.com/serve/MUIFAKaxfMOCvFvi4Fkw3Xy_dLDZGmWQSYbwKjhBUfvbWP5T9DPkGJ4ze-5thSvLbObVT8eYJvTV28L18X1MZtdBge2pEogn9-K_0KjylIb2oFBdyo_du43VOmBGORmO_3TtJ2rB-xqM6t53vbvx4vg_GTjL9-3twnhDRKDfHOWvzsYueNrrWsj4mOSu_hHZrFGtM9FhC4ik2PTs"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}