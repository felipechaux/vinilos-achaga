'use client'

import { Button } from "@/components/ui/button"
import { memo } from "react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen pt-20" role="banner" aria-labelledby="hero-title">
      <main className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Content Section - Priority content for LCP */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center lg:text-left animate-fade-in-up">
            <div className="space-y-8">
              {/* Main Heading - Optimized for LCP */}
              <div className="space-y-4">
                <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                  <span className="text-gradient">
                    VINILOS
                  </span>
                  <br />
                  <span className="text-gray-800">ADHESIVOS</span>
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-3" role="presentation">
                  <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" aria-hidden="true"></div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-700 tracking-wide">PARA:</h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" aria-hidden="true"></div>
                </div>
              </div>

              {/* Services List - Simplified animations */}
              <div className="space-y-6" role="list" aria-label="Servicios disponibles">
                <div className="group hover:translate-x-2 transition-transform duration-300" role="listitem">
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:scale-110 transition-transform duration-300" aria-hidden="true"></div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
                      IMPRESIÓN DIGITAL
                    </h3>
                  </div>
                  <p className="ml-7 mt-1 text-sm text-gray-600 font-medium">
                    Alta calidad y colores vibrantes
                  </p>
                </div>
                
                <div className="group hover:translate-x-2 transition-transform duration-300" role="listitem">
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300" aria-hidden="true"></div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
                      PLOTTER DE CORTE Y SANDBLASTING
                    </h3>
                  </div>
                  <p className="ml-7 mt-1 text-sm text-gray-600 font-medium">
                    Precisión y durabilidad garantizada
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6 space-y-6">
                <div className="text-center lg:text-left">
                  <p className="text-xl md:text-2xl font-light text-gray-700 mb-2 leading-relaxed">
                    Descubre nuestro 
                    <span className="font-semibold text-purple-600 ml-2">producto</span>
                  </p>
                  <p className="text-xl md:text-2xl font-light text-gray-700 mb-8">
                    <span className="font-bold text-gray-900">aquí</span>
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <Button
                    onClick={() => scrollToSection('stock')}
                    className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 touch-target"
                    aria-describedby="cta-description"
                  >
                    <span className="relative z-10">Ver Stock</span>
                  </Button>
                  <span id="cta-description" className="sr-only">
                    Navega a la sección de stock para ver nuestros productos disponibles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Section - Simplified for better performance */}
        <div className="flex-1 relative overflow-hidden" role="img" aria-label="Elementos decorativos con gradientes en tonos púrpura y azul">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-blue-200 to-purple-300">
            {/* Simplified animated shapes for better performance */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-full h-full">
                <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-purple-300 to-blue-400 rounded-full opacity-60 blur-3xl animate-float" aria-hidden="true"></div>
                <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-br from-purple-400 to-blue-300 rounded-full opacity-40 blur-xl animate-float-delayed" aria-hidden="true"></div>
              </div>

              {/* Simplified SVG overlay */}
              <div className="absolute inset-0">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 600"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  aria-label="Formas decorativas abstractas"
                >
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path d="M0,200 Q200,100 400,250 L400,600 L0,600 Z" fill="url(#gradient1)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default memo(HeroSection)
