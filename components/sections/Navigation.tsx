'use client'

import { useState, useEffect } from "react"
import { ShoppingCart, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Quiénes Somos' },
    { id: 'stock', label: 'Stock' },
    { id: 'products', label: 'Productos' },
    { id: 'footer', label: 'Contacto' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center justify-between p-4 md:p-6 max-w-7xl mx-auto">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl md:text-3xl font-bold text-purple-800 italic hover:text-purple-600 transition-colors"
            >
              Vinilos Achaga
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'text-purple-600' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="hidden md:inline">Log In</span>
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden mobile-menu-container"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Mobile Menu */}
          <div className="mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-purple-800 italic">Vinilos Achaga</h2>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-4">
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleMobileNavClick(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-purple-100 text-purple-700 border-l-4 border-purple-600'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-gray-200 space-y-3">
                <Button className="w-full" variant="outline">
                  <User className="w-4 h-4 mr-2" />
                  Iniciar Sesión
                </Button>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Ver Carrito
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
