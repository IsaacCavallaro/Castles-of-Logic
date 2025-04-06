"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail } from "lucide-react"
import AnimateInView from "./animate-in-view"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentName: "",
    studentAge: "",
    programType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, programType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Need to submit this to email
    console.log("Form submitted:", formData)
    alert("Thank you for your enquiry! We'll be in touch soon.")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      studentName: "",
      studentAge: "",
      programType: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 bg-[#123458] text-white">
      <div className="container mx-auto px-4">
        <AnimateInView>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Enquire Now</h2>
        </AnimateInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimateInView
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="mb-8">
                Ready to take the next step in your debate journey? Fill out the form or contact us directly using the
                information below.
              </p>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Phone className="text-[#123458] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p>0412 266 981</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Mail className="text-[#123458] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p>tutoring@castlesoflogic.com</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
          >
            <div className="bg-white text-[#030303] p-8 rounded-lg">
              {/* <h3 className="text-2xl font-bold text-[#123458] mb-6">Enquiry Form</h3> */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-[#123458]">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-[#D4C9BE]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#123458]">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-[#D4C9BE]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#123458]">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-[#D4C9BE]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="studentName" className="text-[#123458]">
                      Student Name
                    </Label>
                    <Input
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      className="border-[#D4C9BE]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="studentAge" className="text-[#123458]">
                      Student Age/Year Level
                    </Label>
                    <Input
                      id="studentAge"
                      name="studentAge"
                      value={formData.studentAge}
                      onChange={handleChange}
                      className="border-[#D4C9BE]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="programType" className="text-[#123458]">
                      Program Interest
                    </Label>
                    <Select onValueChange={handleSelectChange} value={formData.programType}>
                      <SelectTrigger className="border-[#D4C9BE]">
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="private">Private Coaching</SelectItem>
                        <SelectItem value="group">Group Coaching</SelectItem>
                        <SelectItem value="school">School Workshop</SelectItem>
                        <SelectItem value="unsure">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#123458]">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="border-[#D4C9BE]"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-[#123458] hover:bg-[#030303] text-white">
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

