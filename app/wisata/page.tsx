import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import TourismClient from '@/components/tourism-client'

export const metadata = {
  title: 'Wisata | Agrowisata Cafe Resto Gading Asri Jember',
  description:
    'Jelajahi berbagai wahana wisata di Agrowisata Cafe Resto Gading Asri Jember: kebun buah naga, mini zoo, kereta mini, playground, gazebo, dan area rekreasi keluarga.',
}

export default function WisataPage() {
  return (
    <>
      <Navbar />
      <TourismClient />
      <Footer />
    </>
  )
}
