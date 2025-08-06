'use client'

import { Instagram, Phone, Mail, MapPin } from "lucide-react"

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-16" role="contentinfo" aria-labelledby="footer-title">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <h3 id="footer-title" className="text-2xl font-bold text-purple-400 italic mb-4">Vinilos Achaga</h3>
            <p className="text-gray-400 mb-4">
              ¿Tienes alguna pregunta?
            </p>
            <button 
              className="text-purple-400 hover:text-purple-300 underline transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
              aria-label="Ir al centro de ayuda"
            >
              Centro de ayuda
            </button>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Navegación</h4>
            <nav aria-label="Enlaces de navegación en el pie de página">
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    aria-label="Ir a la sección Quiénes somos"
                  >
                    Quiénes somos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    aria-label="Ir a la sección de productos"
                  >
                    Productos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('stock')}
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    aria-label="Ir a la sección de ofertas"
                  >
                    Ofertas
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('footer')}
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    aria-label="Ir a la sección de contacto"
                  >
                    Contáctanos
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white">Información de Contacto</h4>
            <address className="space-y-3 text-gray-400 not-italic">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:chauxabel@gmail.com"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  aria-label="Enviar correo electrónico a chauxabel@gmail.com"
                >
                  chauxabel@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+573128546025"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  aria-label="Llamar al teléfono +57 312 854 6025"
                >
                  +57 312 854 6025
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p>Carrera 78k # 73b - 78 sur,</p>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
            </address>

            <div className="mt-6">
              <h5 className="text-white font-medium mb-3">Síguenos en Redes Sociales</h5>
              <a 
                href="https://www.instagram.com/vinilosachaga/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Visitar nuestro perfil de Instagram (se abre en una nueva ventana)"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
                <span className="underline">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Vinilos Achaga. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
