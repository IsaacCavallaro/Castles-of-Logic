"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, User, School } from "lucide-react"
import AnimateInView from "./animate-in-view"
import StaggeredChildren from "./staggered-children"

export default function Programs() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateInView>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#123458] mb-12">Our Programs</h2>
        </AnimateInView>

        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Private Coaching */}
          <Card className="bg-[#F1EFEC] border-[#D4C9BE] hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-[#123458] rounded-full flex items-center justify-center mb-4">
                <User className="text-white h-6 w-6" />
              </div>
              <CardTitle className="text-2xl text-[#123458]">Private Coaching</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <p>
                <strong>120-minute tailored sessions</strong> with a high-level coach
              </p>
              <p>Focused on individual growth, feedback, and competition prep</p>
              <p>Available in person (Brisbane) or online</p>
            </CardContent>
            <CardFooter>
              <Button onClick={scrollToContact} className="w-full bg-[#123458] hover:bg-[#030303]">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          {/* Group Coaching */}
          <Card className="bg-[#F1EFEC] border-[#D4C9BE] hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-[#123458] rounded-full flex items-center justify-center mb-4">
                <Users className="text-white h-6 w-6" />
              </div>
              <CardTitle className="text-2xl text-[#123458]">Group Coaching</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <p>Organise a group of 4–6 people for weekly sessions</p>
              <p>Learn through drills, debates, and collaborative analysis</p>
              <p>Great for motivation and team development</p>
            </CardContent>
            <CardFooter>
              <Button onClick={scrollToContact} className="w-full bg-[#123458] hover:bg-[#030303]">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          {/* School Workshops */}
          <Card className="bg-[#F1EFEC] border-[#D4C9BE] hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-[#123458] rounded-full flex items-center justify-center mb-4">
                <School className="text-white h-6 w-6" />
              </div>
              <CardTitle className="text-2xl text-[#123458]">School Workshops</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <p>Custom programs for schools (1-off or term-long)</p>
              <p>Perfect for building beginner skill or refining advanced teams</p>
              <p>Curriculum-aligned and highly engaging</p>
            </CardContent>
            <CardFooter>
              <Button onClick={scrollToContact} className="w-full bg-[#123458] hover:bg-[#030303]">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </StaggeredChildren>
      </div>
    </section>
  )
}