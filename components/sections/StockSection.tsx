'use client'

import { Package, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  { 
    id: 1, 
    name: "Vinilo Adhesivo Transparente Brillante", 
    price: "$25.000", 
    stock: 15, 
    category: "Transparente", 
    rating: 4.8,
    image: "https://static.wixstatic.com/media/235a0e_a1f943b9f3d24f048c73aa48855a29d2~mv2.jpg/v1/fill/w_872,h_1160,q_90,enc_avif,quality_auto/235a0e_a1f943b9f3d24f048c73aa48855a29d2~mv2.jpg"
  },
  { 
    id: 2, 
    name: "Vinilo Adhesivo Transparente Mate", 
    price: "$22.000", 
    stock: 12, 
    category: "Transparente", 
    rating: 4.7,
    image: "https://static.wixstatic.com/media/235a0e_376a87185539418bb4752d1d337316c8~mv2.webp/v1/fill/w_520,h_691,q_90,enc_avif,quality_auto/235a0e_376a87185539418bb4752d1d337316c8~mv2.webp"
  },
  { 
    id: 3, 
    name: "Vinilo Adhesivo Blanco Brillante", 
    price: "$20.000", 
    stock: 18, 
    category: "Blanco", 
    rating: 4.9,
    image: "https://static.wixstatic.com/media/235a0e_ee382f10cecd49cd848b940519aff0f5~mv2.jpg/v1/fill/w_466,h_534,q_90,enc_avif,quality_auto/235a0e_ee382f10cecd49cd848b940519aff0f5~mv2.jpg"
  },
  { 
    id: 4, 
    name: "Vinilo Adhesivo Blanco Mate", 
    price: "$18.000", 
    stock: 20, 
    category: "Blanco", 
    rating: 4.8,
    image: "https://static.wixstatic.com/media/235a0e_2ddfbc43a25c4e36876e63d38988481b~mv2.webp/v1/fit/w_536,h_670,q_90,enc_avif,quality_auto/235a0e_2ddfbc43a25c4e36876e63d38988481b~mv2.webp"
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 leading-tight">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <Badge variant="secondary" className="mb-3">{product.category}</Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold text-purple-600">{product.price}</p>
                    <p className="text-sm text-gray-500">Stock: {product.stock} unidades</p>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full bg-purple-600 hover:bg-purple-700 transition-colors"
                  >
                    Agregar al Carrito
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
