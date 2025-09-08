import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Sque Design has transformed how we build products. The components are incredibly well-designed and the developer experience is outstanding.",
      author: "Sarah Chen",
      role: "Head of Design",
      company: "TechFlow",
      avatar: "/professional-woman-headshot.png",
    },
    {
      quote:
        "The design system saved us months of development time. Everything just works together seamlessly, and the documentation is fantastic.",
      author: "Marcus Rodriguez",
      role: "Senior Developer",
      company: "InnovateLab",
      avatar: "/professional-man-headshot.png",
    },
    {
      quote:
        "We've seen a 40% improvement in our design-to-development handoff process since adopting Sque Design. It's been a game-changer.",
      author: "Emily Watson",
      role: "Product Manager",
      company: "StartupCo",
      avatar: "/professional-woman-headshot.png",
    },
  ]

  return (
    <section className="py-24 gradient-testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Loved by teams
            <br />
            around the world
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-pretty">
            Join thousands of teams who trust Sque Design to power their product development and create exceptional user
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-white/90 mb-6 text-pretty">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-white/70 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
