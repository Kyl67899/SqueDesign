"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold text-foreground">
              Sque<span className="text-accent">Design</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </a>
            <a
              href="/solutions"
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </a>
            <a
              href="/developers"
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Developers
            </a>
            <a
              href="/resources"
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Resources
            </a>
            <a
              href="/pricing"
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground text-sm lg:text-base"
            >
              Sign in
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm lg:text-base">
              Contact sales
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md animate-fade-in-up">
            <nav className="flex flex-col space-y-3">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors py-2 px-2 -mx-2 rounded-md hover:bg-muted/50"
              >
                Products
              </a>
              <a
                href="/solutions"
                className="text-muted-foreground hover:text-foreground transition-colors py-2 px-2 -mx-2 rounded-md hover:bg-muted/50"
              >
                Solutions
              </a>
              <a
                href="/developers"
                className="text-muted-foreground hover:text-foreground transition-colors py-2 px-2 -mx-2 rounded-md hover:bg-muted/50"
              >
                Developers
              </a>
              <a
                href="/resources"
                className="text-muted-foreground hover:text-foreground transition-colors py-2 px-2 -mx-2 rounded-md hover:bg-muted/50"
              >
                Resources
              </a>
              <a
                href="/pricing"
                className="text-muted-foreground hover:text-foreground transition-colors py-2 px-2 -mx-2 rounded-md hover:bg-muted/50"
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border mt-4">
                <Button variant="ghost" className="justify-start h-auto py-3">
                  Sign in
                </Button>
                <Button className="justify-start bg-accent hover:bg-accent/90 h-auto py-3">Contact sales</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
