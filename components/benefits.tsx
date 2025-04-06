"use client"
import AnimateInView from "./animate-in-view"
import BenefitsCarousel from "./benefits-carousel"

export default function Benefits() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-[#F1EFEC]">
      <div className="container mx-auto px-4">
        <AnimateInView>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#123458] mb-4">
            Benefits of Debate Coaching
          </h2>
          <p className="text-center text-[#030303] mb-12 max-w-3xl mx-auto">
            Our coaching provides students with skills that extend far beyond the debate room
          </p>
        </AnimateInView>

        <AnimateInView
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: "easeOut",
              },
            },
          }}
        >
          <BenefitsCarousel />
        </AnimateInView>
      </div>
    </section>
  )
}

