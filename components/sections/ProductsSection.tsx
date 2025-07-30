'use client'

import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const productCategories = [
  {
    title: "Impresión Digital",
    description: "Vinilos de alta calidad para impresión digital con colores vibrantes y durabilidad excepcional.",
    image: "🖨️",
    features: ["Alta resolución", "Colores vibrantes", "Resistente al agua", "Fácil aplicación"]
  },
  {
    title: "Plotter de Corte",
    description: "Vinilos especialmente diseñados para corte de precisión con plotter, ideales para señalética.",
    image: "✂️",
    features: ["Corte preciso", "Sin residuos", "Múltiples colores", "Larga duración"]
  },
  {
    title: "Sandblasting",
    description: "Vinilos resistentes para procesos de sandblasting, perfectos para grabados en vidrio y metal.",
    image: "💨",
    features: ["Ultra resistente", "Adhesión fuerte", "Fácil remoción", "Bordes limpios"]
  }
]

export default function ProductsSection() {
  return (
    <section id="products" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tipos de Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce nuestras especialidades en vinilos adhesivos para diferentes aplicaciones
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-8">
                <div className="text-6xl mb-6">{category.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="space-y-2 mb-6">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2">
                      <Palette className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
                  Ver Más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
