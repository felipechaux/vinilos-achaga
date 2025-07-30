'use client'

import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen pt-20">
      <main className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Content Section */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center lg:text-left animate-fade-in-up">
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                    VINILOS
                  </span>
                  <br />
                  <span className="text-gray-800">ADHESIVOS</span>
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-700 tracking-wide">PARA:</h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-6">
                <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                    <p className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
                      IMPRESIÓN DIGITAL
                    </p>
                  </div>
                  <div className="ml-7 mt-1 text-sm text-gray-600 font-medium">
                    Alta calidad y colores vibrantes
                  </div>
                </div>
                
                <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                    <p className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
                      PLOTTER DE CORTE Y SANDBLASTING
                    </p>
                  </div>
                  <div className="ml-7 mt-1 text-sm text-gray-600 font-medium">
                    Precisión y durabilidad garantizada
                  </div>
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
                    className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
                  >
                    <span className="relative z-10">Ver Stock</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Section */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-blue-200 to-purple-300">
            {/* Abstract curved shapes */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-full h-full">
                <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-purple-300 to-blue-400 rounded-full opacity-60 blur-3xl animate-float"></div>
                <div className="absolute top-1/2 -right-1/3 w-80 h-80 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-50 blur-2xl animate-float-delayed"></div>
                <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-br from-purple-400 to-blue-300 rounded-full opacity-40 blur-xl animate-float"></div>
              </div>

              {/* Curved overlay shapes */}
              <div className="absolute inset-0">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 600"
                  preserveAspectRatio="xMidYMid slice"
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

                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 600"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <path d="M100,0 Q300,150 400,300 L400,600 L0,600 L0,400 Z" fill="url(#gradient2)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
