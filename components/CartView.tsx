import { useEffect, useState } from "react";
import { getCart, removeFromCart, updateCartItem, clearCart, CartItem } from "@/lib/cart";
import { Button } from "@/components/ui/button";

export default function CartView() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  function handleRemove(id: number) {
    removeFromCart(id);
    setCart(getCart());
  }

  function handleQuantityChange(id: number, quantity: number) {
    if (quantity < 1) return;
    updateCartItem(id, quantity);
    setCart(getCart());
  }

  function handleClear() {
    clearCart();
    setCart([]);
  }

  console.log('Cart contents:', cart);
  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Carrito vacío</h2>
        <p className="text-gray-500">Agrega productos para verlos aquí.</p>
      </div>
    );
  }

  // Calculate total (handle price with possible $ and .)
  const total = cart.reduce((sum, item) => {
    let priceStr = String(item.price).replace(/[^\d]/g, '');
    const price = parseInt(priceStr, 10);
    return sum + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Tu Carrito</h2>
      <ul className="divide-y divide-gray-200 mb-6">
        {cart.map(item => (
          <li key={item.id} className="flex items-center py-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-purple-600 font-bold">{item.price}</p>
              <div className="flex items-center mt-2">
                <label className="mr-2 text-sm">Cantidad:</label>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={e => handleQuantityChange(item.id, Number(e.target.value))}
                  className="w-16 border rounded px-2 py-1 text-center"
                />
              </div>
            </div>
            <Button size="sm" variant="destructive" onClick={() => handleRemove(item.id)}>
              Eliminar
            </Button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={handleClear}>Vaciar Carrito</Button>
        <Button
          variant="default"
          className="bg-green-600 hover:bg-green-700 text-white"
          onClick={async () => {
            try {
              const response = await fetch('/api/wompi-checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cart }),
              });
              const data = await response.json();
              if (data.url) {
                window.location.href = data.url;
              } else {
                alert(data.error || 'Error iniciando el pago.');
              }
            } catch (err) {
              alert('Error conectando con el servidor de pagos.');
            }
          }}
        >
          Pagar con Wompi
        </Button>
      </div>
      <div className="flex justify-end mt-6">
        <span className="text-lg font-semibold">Total: {total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</span>
      </div>
    </div>
  );
}
