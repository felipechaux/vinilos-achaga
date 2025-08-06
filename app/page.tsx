'use client'

import { useEffect, useState, useCallback, useMemo } from "react"
import dynamic from 'next/dynamic'
import Navigation from "@/components/sections/Navigation"
import HeroSection from "@/components/sections/HeroSection"

// Lazy load components to reduce initial bundle size
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})
const StockSection = dynamic(() => import("@/components/sections/StockSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})
const ProductsSection = dynamic(() => import("@/components/sections/ProductsSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})
const Footer = dynamic(() => import("@/components/sections/Footer"), {
  loading: () => <div className="h-32 bg-gray-200 animate-pulse" />
})
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  ssr: false
})

const sections = ['hero', 'about', 'stock', 'products', 'footer'] as const

export default function Home() {
  const [activeSection, setActiveSection] = useState<typeof sections[number]>('hero')

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100

    // Use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    })
  }, [])

  useEffect(() => {
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  // Memoize navigation props to prevent unnecessary re-renders
  const navigationProps = useMemo(() => ({
    activeSection,
    scrollToSection
  }), [activeSection, scrollToSection])

  const heroProps = useMemo(() => ({
    scrollToSection
  }), [scrollToSection])

  const footerProps = useMemo(() => ({
    scrollToSection
  }), [scrollToSection])

  return (
    <div className="min-h-screen bg-white">
      <Navigation {...navigationProps} />
      <div className="relative">
        <WhatsAppButton />
      </div>
      <HeroSection {...heroProps} />
      <AboutSection />
      <StockSection />
      <ProductsSection />
      <Footer {...footerProps} />
      <WhatsAppButton />
    </div>
  )
}
