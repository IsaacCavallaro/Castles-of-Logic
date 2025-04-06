import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, UserCheck, BarChart, Heart } from "lucide-react"
import AnimateInView from "./animate-in-view"
import StaggeredChildren from "./staggered-children"

export default function WhyChoose() {
  return (
    <section className="py-20 bg-[#F1EFEC]">
      <div className="container mx-auto px-4">
        <AnimateInView>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#123458] mb-12">
            Why Choose Castles of Logic?
          </h2>
        </AnimateInView>

        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Elite Experience */}
          <Card className="bg-white border-[#D4C9BE] hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="w-12 h-12 bg-[#123458] rounded-full flex items-center justify-center">
                <Award className="text-white h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-[#123458]">Elite Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#030303]">
                Our coaches are among the top debaters and adjudicators in the country, with real competition success
                and coaching results.
              </p>
            </CardContent>
          </Card>

          {/* Personalised Coaching */}
          <Card className="bg-white border-[#D4C9BE] hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="w-12 h-12 bg-[#123458] rounded-full flex items-center justify-center">
                <UserCheck className="text-white h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-[#123458]">Personalised Coaching</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#030303]">
                No cookie-cutter content — every student receives customised feedback and progression plans.
              </p>
            </CardContent>
          </Card>

          {/* Proven Results */}
          <Card className="bg-white border-[#D4C9BE] hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="w-12 h-12 bg-[#123458] rounded-full flex items-center justify-center">
                <BarChart className="text-white h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-[#123458]">Proven Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#030303]">
                We help students win competitions, break into top teams, and fall in love with public speaking.
              </p>
            </CardContent>
          </Card>

          {/* Premium, Supportive Mentorship */}
          <Card className="bg-white border-[#D4C9BE] hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="w-12 h-12 bg-[#123458] rounded-full flex items-center justify-center">
                <Heart className="text-white h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-[#123458]">Premium, Supportive Mentorship</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#030303]">
                We're committed to high standards — but always in a supportive, encouraging way. This is a place to
                grow.
              </p>
            </CardContent>
          </Card>
        </StaggeredChildren>
      </div>
    </section>
  )
}

