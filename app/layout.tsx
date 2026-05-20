import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Agrowisata Cafe Resto Gading Asri | Wisata & Kuliner Keluarga Jember',
  description:
    'Nikmati pengalaman wisata agro dan kuliner keluarga yang tak terlupakan di Agrowisata Cafe Resto Gading Asri, Jember. Kebun buah naga, mini zoo, kolam perahu, taman bermain, dan kuliner lezat dalam satu tempat.',
  keywords: 'agrowisata, cafe resto, Jember, wisata keluarga, kebun buah naga, mini zoo, kuliner',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${lato.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
