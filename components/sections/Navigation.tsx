'use client'

import { ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="flex items-center justify-between p-4 md:p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-800 italic">Vinilos Achaga</h1>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('hero')}
            className={`text-sm font-medium transition-colors ${activeSection === 'hero' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
          >
            Quiénes Somos
          </button>
          <button 
            onClick={() => scrollToSection('stock')}
            className={`text-sm font-medium transition-colors ${activeSection === 'stock' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
          >
            Stock
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className={`text-sm font-medium transition-colors ${activeSection === 'products' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
          >
            Productos
          </button>
          <button 
            onClick={() => scrollToSection('footer')}
            className={`text-sm font-medium transition-colors ${activeSection === 'footer' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
          >
            Contacto
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="hidden md:inline">Log In</span>
          </Button>
          <Button variant="ghost" size="sm">
            <ShoppingCart className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
