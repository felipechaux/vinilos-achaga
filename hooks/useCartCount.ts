"use client"
import { useEffect, useState } from "react"
import { getCart } from "@/lib/cart"

export function useCartCount() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    function updateCount() {
      const cart = getCart()
      setCount(cart.reduce((sum, item) => sum + item.quantity, 0))
    }
    updateCount()
    window.addEventListener("cart-updated", updateCount)
    window.addEventListener("storage", updateCount)
    return () => {
      window.removeEventListener("cart-updated", updateCount)
      window.removeEventListener("storage", updateCount)
    }
  }, [])

  return count
}
