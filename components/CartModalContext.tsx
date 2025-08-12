"use client"
import { createContext, useContext, useState } from "react"

interface CartModalContextType {
  showCart: boolean
  openCart: () => void
  closeCart: () => void
}

const CartModalContext = createContext<CartModalContextType | undefined>(undefined)

export function useCartModal() {
  const ctx = useContext(CartModalContext)
  if (!ctx) throw new Error("useCartModal must be used within CartModalProvider")
  return ctx
}

export function CartModalProvider({ children }: { children: React.ReactNode }) {
  const [showCart, setShowCart] = useState(false)
  const openCart = () => setShowCart(true)
  const closeCart = () => setShowCart(false)

  return (
    <CartModalContext.Provider value={{ showCart, openCart, closeCart }}>
      {children}
    </CartModalContext.Provider>
  )
}
