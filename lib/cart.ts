// Simple cart utility for localStorage management
export type CartItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
};


const CART_KEY = 'vinilos_cart';

function notifyCartChange() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('cart-updated'));
  }
}

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function addToCart(item: Omit<CartItem, 'quantity'>) {
  const cart = getCart();
  const existing = cart.find(ci => ci.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  notifyCartChange();
}

export function removeFromCart(id: number) {
  const cart = getCart().filter(item => item.id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  notifyCartChange();
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  notifyCartChange();
}

export function updateCartItem(id: number, quantity: number) {
  const cart = getCart().map(item =>
    item.id === id ? { ...item, quantity } : item
  );
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  notifyCartChange();
}
