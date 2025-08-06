import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Vinilos Achaga - Vinilos Adhesivos de Alta Calidad",
  description: "Especialistas en vinilos adhesivos para impresión digital, plotter de corte y sandblasting en Bogotá, Colombia. +20 años de experiencia con productos Arclad.",
  keywords: "vinilos adhesivos, impresión digital, plotter de corte, sandblasting, Arclad, Bogotá, Colombia, vinilos calidad",
  generator: 'Next.js',
  robots: 'index, follow',
  authors: [{ name: 'Vinilos Achaga', url: 'https://vinilosachaga.com' }],
  metadataBase: new URL('https://vinilosachaga.com'),
  alternates: {
    canonical: '/',
  },
  category: 'Business',
  classification: 'Vinilos Adhesivos',
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: '32x32', type: 'image/svg+xml' }
    ],
    apple: '/icon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Vinilos Achaga - Vinilos Adhesivos de Alta Calidad",
    description: "Especialistas en vinilos adhesivos para impresión digital, plotter de corte y sandblasting en Bogotá, Colombia. +20 años de experiencia.",
    type: "website",
    locale: "es_CO",
    siteName: "Vinilos Achaga",
    url: '/',
    images: [
      {
        url: '/icon.svg',
        width: 1200,
        height: 630,
        alt: 'Vinilos Achaga - Especialistas en Vinilos Adhesivos',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vinilos Achaga - Vinilos Adhesivos de Alta Calidad",
    description: "Especialistas en vinilos adhesivos para impresión digital, plotter de corte y sandblasting en Bogotá, Colombia.",
    images: ['/icon.svg'],
    creator: '@vinilosachaga',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  )
}
