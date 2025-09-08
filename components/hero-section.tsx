"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              Session 2025 • New components
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight">
              Design system
              <br />
              infrastructure
              <br />
              to grow your
              <br />
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">product</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl text-pretty leading-relaxed">
              Join the millions of companies that use Sque to accept payments online and in person, embed financial
              services, power custom revenue models, and build a more profitable business.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex-1 max-w-md mx-auto sm:mx-0 w-full">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 h-11 sm:h-12 w-full"
                />
              </div>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto"
              >
                Start now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-white/70">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white p-0 h-auto">
                <Play className="mr-2 h-4 w-4" />
                Watch demo
              </Button>
              <span className="text-xs sm:text-sm text-center sm:text-left">
                See also:{" "}
                <a href="/fraud" className="text-white hover:underline">
                  Radar for powered fraud protection
                </a>
              </span>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <img
                src="/modern-analytics-dashboard.png"
                alt="Dashboard Preview"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
