export function TrustedBySection() {
  const companies = [
    { name: "OpenAI", logo: "/openai-logo-inspired-abstract.png" },
    { name: "Amazon", logo: "/amazon-logo.png" },
    { name: "Google", logo: "/google-logo.png" },
    { name: "Anthropic", logo: "/anthropic-logo-abstract.png" },
    { name: "Adobe", logo: "/adobe-logo.png" },
    { name: "Shopify", logo: "/shopify-logo.png" },
    { name: "Airbnb", logo: "/airbnb-logo-inspired-abstract.png" },
    { name: "Netflix", logo: "/netflix-inspired-logo.png" },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground mb-12 text-sm uppercase tracking-wider">
          Trusted by companies from startups to Fortune 500
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
