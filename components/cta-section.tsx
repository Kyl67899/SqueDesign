import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTASection() {
  const benefits = ["Free 14-day trial", "No setup fees", "Cancel anytime", "Premium support included"]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to transform
            <br />
            your design workflow?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of teams already using Sque Design to build better products faster. Start your free trial
            today.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center text-muted-foreground animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="gradient-cta text-white hover:opacity-90 px-8">
              Start free trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Schedule demo
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            By signing up, you agree to our{" "}
            <a href="/terms" className="text-accent hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
