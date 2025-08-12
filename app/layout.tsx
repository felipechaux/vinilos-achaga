import { Inter } from "next/font/google";
import { CartModalProvider } from "@/components/CartModalContext";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=yes" />
        {/* Favicons and Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vinilos Achaga",
              "description": "Especialistas en vinilos adhesivos para impresión digital, plotter de corte y sandblasting",
              "url": "https://vinilosachaga.com",
              "telephone": "+57-312-854-6025",
              "email": "chauxabel@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Carrera 78k # 73b - 78 sur",
                "addressLocality": "Bogotá",
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "4.570868",
                "longitude": "-74.297333"
              },
              "sameAs": [
                "https://www.instagram.com/vinilosachaga/"
              ],
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "$$",
              "image": "https://vinilosachaga.com/icon.svg"
            })
          }}
        />
      </head>
      <body className={`${inter.className} font-sans`}>
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-purple-600 text-white px-4 py-2 rounded-md z-[10000] focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          Saltar al contenido principal
        </a>
        <CartModalProvider>
          <div id="main-content">
            {children}
          </div>
        </CartModalProvider>
      </body>
    </html>
  );
}