import { Github, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: ["Design System", "Component Library", "Templates", "Icons", "Figma Plugin"],
    },
    {
      title: "Developers",
      links: ["Documentation", "API Reference", "GitHub", "Changelog", "Status"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press", "Partners"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact", "Community", "Training", "Professional Services"],
    },
  ]

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">
              Sque<span className="text-accent">Design</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md text-pretty">
              Empowering teams to build exceptional digital products with our comprehensive design system and component
              library.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">© 2024 Sque Design. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
