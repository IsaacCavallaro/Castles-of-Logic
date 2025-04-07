import Image from "next/image"
import AnimateInView from "./animate-in-view"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimateInView>
              <h2 className="text-3xl md:text-4xl font-bold text-[#123458] mb-6">About Us</h2>
            </AnimateInView>
            <div className="prose max-w-none text-[#030303] space-y-4">
              <AnimateInView delay={0.1}>
                <p>
                  Hi, I'm Leonard Cavallaro, Founder and Head of Tutoring at Castles of Logic. My mission here is
                  simple: to help students learn how to think, argue, and speak with power.
                </p>
              </AnimateInView>
              <AnimateInView delay={0.2}>
                <p>
                  As a senior debater, adjudicator, and coach, I believe that students deserve tutors who genuinely
                  care. I also believe there's something powerful about young people teaching young people — offering
                  students a relatable mentor who knows the competitions inside and out because they were just in the
                  ring themselves.
                </p>
              </AnimateInView>
              <AnimateInView delay={0.3}>
                <p>
                  Beyond debate, I'm an award-winning creative writer, a prolific high-end content writer, and a Youth
                  Parliamentarian. The written and spoken word has been my weapon in life — and now I've built a method
                  to help students wield it with the same clarity and conviction.
                </p>
              </AnimateInView>
              <AnimateInView delay={0.4}>
                <p>
                  My world-first <strong>Castle Methodology</strong> is transforming how students learn debate. It
                  combines clarity, structure, and strategy into a practical system that students can actually apply
                  under pressure.
                </p>
              </AnimateInView>
              <AnimateInView delay={0.5}>
                <p>
                  My coaching is sharp, encouraging, and always tailored to the student. I don't just teach "how to
                  rebut" — I teach how to think like a strategist, speak like a leader, and grow as a communicator.
                </p>
              </AnimateInView>
              <AnimateInView delay={0.6}>
                <p>If you're ready to win debates and build confidence for life, let's get started.</p>
              </AnimateInView>
            </div>
          </div>
          <AnimateInView
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
          >
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                <Image
                  src="about-image.jpeg"
                  alt="Leonard Cavallaro, Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

