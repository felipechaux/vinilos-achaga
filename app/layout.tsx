import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vinilos Achaga - Vinilos Adhesivos",
  description: "Vinilos adhesivos para impresión digital, plotter de corte y sanblasting",
  keywords: "vinilos, adhesivos, impresión digital, plotter, sanblasting",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
