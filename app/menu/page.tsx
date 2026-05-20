import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import MenuClient from '@/components/menu-client'

export const metadata = {
  title: 'Menu & Kontak | Agrowisata Cafe Resto Gading Asri Jember',
  description:
    'Jelajahi menu kuliner autentik Indonesia, seafood segar, dan minuman segar di Agrowisata Cafe Resto Gading Asri Jember. Reservasi dan informasi kontak tersedia.',
}

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <MenuClient />
      <Footer />
    </>
  )
}
