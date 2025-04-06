"use client"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#030303] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Castles of Logic</h3>
            <p className="text-sm text-gray-300 mb-4">Brisbane's Leading Debate Coaching Academy</p>
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Castles of Logic. All rights reserved.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span>0412 266 981</span>
              </li>
              <li className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:tutoring@castlesoflogic.com" className="hover:text-white transition-colors">
                  tutoring@castlesoflogic.com
                </a>
              </li>
              <li className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>Brisbane, Australia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

