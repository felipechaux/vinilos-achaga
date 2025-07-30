'use client'

import { Instagram, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-purple-400 italic mb-4">Vinilos Achaga</h3>
            <p className="text-gray-400 mb-4">
              ¿Tienes alguna pregunta?
            </p>
            <button className="text-purple-400 hover:text-purple-300 underline transition-colors">
              Centro de ayuda
            </button>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Nosotros</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors">Quienes somos</button></li>
              <li><button className="hover:text-white transition-colors">Productos</button></li>
              <li><button className="hover:text-white transition-colors">Ofertas</button></li>
              <li><button className="hover:text-white transition-colors">Contáctanos</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>chauxabel@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+57 3128546025</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <p>Carrera 78k # 73b - 78 sur,</p>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-white font-medium mb-3">Síguenos</h5>
              <a 
                href="https://www.instagram.com/vinilosachaga/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Instagram className="w-5 h-5" />
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
