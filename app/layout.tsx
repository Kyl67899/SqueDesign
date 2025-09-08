import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sque Design - Premium UI Components & Design Systems",
  description:
    "Transform your digital products with our premium UI components, design systems, and templates. Built for modern web applications with performance and accessibility in mind.",
  keywords: "UI components, design systems, React components, web design, user interface, premium templates",
  authors: [{ name: "Sque Design Team" }],
  creator: "Sque Design",
  publisher: "Sque Design",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sque.design",
    title: "Sque Design - Premium UI Components & Design Systems",
    description: "Transform your digital products with our premium UI components, design systems, and templates.",
    siteName: "Sque Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sque Design - Premium UI Components & Design Systems",
    description: "Transform your digital products with our premium UI components, design systems, and templates.",
    creator: "@squedesign",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
