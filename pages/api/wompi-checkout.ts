import type { NextApiRequest, NextApiResponse } from 'next';

// Only use your public key here. Private key should be used for server-to-server calls if needed.
const WOMPI_PUBLIC_KEY = process.env.WOMPI_PUBLIC_KEY;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { cart } = req.body;
  if (!Array.isArray(cart) || cart.length === 0) {
    return res.status(400).json({ error: 'Cart is empty or invalid' });
  }

  // Calculate total securely on the server
  let total = 0;
  for (const item of cart) {
    const price = Number(item.price);
    const quantity = parseInt(item.quantity, 10);
    if (isNaN(price) || isNaN(quantity) || quantity < 1) {
      return res.status(400).json({ error: `Invalid cart item` });
    }
    total += price * quantity;
  }
  const amountInCents = Math.round(total * 100);
  if (amountInCents <= 0) {
    return res.status(400).json({ error: 'Invalid total amount' });
  }

  // Build Wompi checkout URL

  if (!WOMPI_PUBLIC_KEY) {
    return res.status(500).json({ error: 'WOMPI public key is not configured' });
  }

  const wompiUrl = new URL('https://checkout.wompi.co/p/');
  wompiUrl.searchParams.set('public-key', WOMPI_PUBLIC_KEY);
  wompiUrl.searchParams.set('currency', 'COP');
  wompiUrl.searchParams.set('amount-in-cents', String(amountInCents));
  wompiUrl.searchParams.set('reference', `cart-${Date.now()}`);
  wompiUrl.searchParams.set('redirect-url', req.headers.origin || 'http://localhost:3000/');

  return res.status(200).json({ url: wompiUrl.toString() });
}
