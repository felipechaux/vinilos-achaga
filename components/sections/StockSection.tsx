'use client'

import { Package, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  { id: 1, name: "Vinilo Adhesivo Premium", price: "$25.000", stock: 15, category: "Digital", rating: 4.8 },
  { id: 2, name: "Vinilo para Plotter", price: "$18.000", stock: 8, category: "Corte", rating: 4.9 },
  { id: 3, name: "Vinilo Sandblasting", price: "$30.000", stock: 12, category: "Sandblasting", rating: 4.7 },
  { id: 4, name: "Vinilo Transparente", price: "$22.000", stock: 20, category: "Especial", rating: 4.8 },
  { id: 5, name: "Vinilo Metálico", price: "$35.000", stock: 6, category: "Premium", rating: 4.9 },
  { id: 6, name: "Vinilo Mate", price: "$20.000", stock: 18, category: "Standard", rating: 4.6 },
]

export default function StockSection() {
  return (
    <section id="stock" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro Stock
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia variedad de vinilos adhesivos disponibles para entrega inmediata
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <Badge variant="secondary" className="mb-3">{product.category}</Badge>
                  </div>
                  <Package className="w-8 h-8 text-purple-600" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-purple-600">{product.price}</p>
                    <p className="text-sm text-gray-500">Stock: {product.stock} unidades</p>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-purple-600 hover:bg-purple-700 transition-colors"
                  >
                    Agregar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
