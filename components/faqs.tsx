"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"
import AnimateInView from "./animate-in-view"
import { motion, AnimatePresence } from "framer-motion"

export default function Faqs() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateInView>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#123458] mb-12">
            Frequently Asked Questions
          </h2>
        </AnimateInView>

        <div className="max-w-3xl mx-auto">
          <AnimateInView>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={openItem || undefined}
              onValueChange={(value) => setOpenItem(value)}
            >
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <AccordionItem value="item-1" className="border-[#D4C9BE]">
                      <AccordionTrigger className="text-[#123458] font-medium text-lg">
                        What age groups do you coach?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#030303]">
                        We specialise in students aged 11-16 (Years 7-11), but welcome advanced younger debaters.
                        Coaching is tailored to each student's level, whether they're just starting or competing
                        nationally.
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <AccordionItem value="item-2" className="border-[#D4C9BE]">
                      <AccordionTrigger className="text-[#123458] font-medium text-lg">
                        Does my child need previous debating experience?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#030303]">
                        Not at all! While our specialty is high-level competition, we welcome both complete beginners
                        and experienced debaters. Whether you're aiming to break into the world of competitive debating
                        or refine your international strategy, we'll meet you where you're at.
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <AccordionItem value="item-3" className="border-[#D4C9BE]">
                      <AccordionTrigger className="text-[#123458] font-medium text-lg">
                        How experienced/qualified are your tutors?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#030303]">
                        Our tutors are top-tier debaters and coaches who've competed at the highest levels (Senior A,
                        state trials, mooting). They're not just accomplished—they're relatable mentors who know how to
                        translate their wins into your growth.
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <AccordionItem value="item-4" className="border-[#D4C9BE]">
                      <AccordionTrigger className="text-[#123458] font-medium text-lg">
                        Where are sessions held?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#030303]">
                        In-person coaching is available across Brisbane (homes or partner libraries), plus online
                        sessions for flexibility.
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <AccordionItem value="item-5" className="border-[#D4C9BE]">
                      <AccordionTrigger className="text-[#123458] font-medium text-lg">
                        How long are the coaching sessions?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#030303]">
                        The most effective and popular session time is 90 minutes or 2 hours. But we also offer shorter
                        practice session and custom programs for competition prep.
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <AccordionItem value="item-6" className="border-[#D4C9BE]">
                      <AccordionTrigger className="text-[#123458] font-medium text-lg">
                        What sets Castles of Logic apart?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#030303]">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            We're not just teaching rebuttal techniques — we're building confident, strategic thinkers.
                          </li>
                          <li>Our coaching is deep, competitive, and empowering.</li>
                          <li>All sessions are run by top-tier debaters and elite academic students.</li>
                          <li>
                            We blend elite-level experience with clear mentorship, tailored feedback, and real-world
                            logic skills.
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <AccordionItem value="item-7" className="border-[#D4C9BE]">
                      <AccordionTrigger className="text-[#123458] font-medium text-lg">
                        How much does coaching cost?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#030303]">
                        Rates vary by session type (private/small group) and length. Our tutors are exceptional—and so
                        is our methodology. Email{" "}
                        <a href="mailto:tutoring@castlesoflogic.com" className="text-[#123458] underline">
                          tutoring@castlesoflogic.com
                        </a>{" "}
                        or enquire below for personalised pricing.
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <AccordionItem value="item-8" className="border-[#D4C9BE]">
                      <AccordionTrigger className="text-[#123458] font-medium text-lg">
                        How do I get started?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#030303]">
                        Call <strong>0412 266 981</strong> or email{" "}
                        <a href="mailto:tutoring@castlesoflogic.com" className="text-[#123458] underline">
                          tutoring@castlesoflogic.com
                        </a>{" "}
                        to book a free intro chat. Let's discuss your goals and see if we're the right fit!
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </Accordion>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

