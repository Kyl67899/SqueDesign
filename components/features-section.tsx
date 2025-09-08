import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Globe, Palette, Code, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Palette,
      title: "Design Systems",
      description:
        "Comprehensive design systems with tokens, components, and guidelines for consistent user experiences.",
      image: "/design-system-components-interface.png",
    },
    {
      icon: Code,
      title: "Developer Experience",
      description: "Built with modern frameworks and best practices. TypeScript support, comprehensive documentation.",
      image: "/placeholder-b802r.png",
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Lightweight components optimized for speed. Tree-shaking support and minimal bundle impact.",
      image: "/performance-metrics-dashboard.png",
    },
    {
      icon: Shield,
      title: "Accessibility First",
      description:
        "WCAG 2.1 compliant components with keyboard navigation, screen reader support, and focus management.",
      image: "/placeholder-45vj5.png",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Internationalization support with RTL layouts, multiple languages, and cultural adaptations.",
      image: "/placeholder-2hlwg.png",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Shared libraries, version control, and team management tools for seamless collaboration.",
      image: "/team-collaboration-dashboard.png",
    },
  ]

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 gradient-features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Modular solutions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
            A fully integrated
            <br />
            suite of design
            <br />
            and development
            <br />
            products
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed px-4 sm:px-0">
            Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered
            platform for design systems, manage revenue operations, and launch for brand new business models.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/20 animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                <div className="mb-4 flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
                    loading="lazy"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
            Start with Components
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
