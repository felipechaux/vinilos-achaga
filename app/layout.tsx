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
  title: "Vinilos Achaga - Vinilos Adhesivos",
  description: "Vinilos adhesivos para impresión digital, plotter de corte y sanblasting",
  keywords: "vinilos, adhesivos, impresión digital, plotter, sanblasting",
  generator: 'v0.dev',
  robots: 'index, follow',
  authors: [{ name: 'Vinilos Achaga' }],
  openGraph: {
    title: "Vinilos Achaga - Vinilos Adhesivos",
    description: "Vinilos adhesivos para impresión digital, plotter de corte y sanblasting",
    type: "website",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} font-sans`}>
        {children}
      </body>
    </html>
  )
}
