'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollRevealInit } from './scroll-reveal'

const highlights = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    title: 'Kebun Buah Naga',
    desc: 'Petualangan seru memetik buah naga segar langsung dari kebunnya yang hijau dan asri.',
    color: 'from-[var(--forest)] to-[var(--forest-mid)]',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
        <path d="M4 20h16"/>
      </svg>
    ),
    title: 'Mini Zoo',
    desc: 'Temui berbagai satwa lucu dan jinak yang menjadi favorit anak-anak dan keluarga.',
    color: 'from-[var(--wood)] to-[var(--amber)]',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Area Bermain',
    desc: 'Playground modern yang aman dan menyenangkan untuk si kecil bermain sepuasnya.',
    color: 'from-[var(--forest-mid)] to-[var(--forest-light)]',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M4 20V10l8-6 8 6v10"/>
        <path d="M9 20v-5h6v5"/>
      </svg>
    ),
    title: 'Perahu Bebek',
    desc: 'Berpetualang di atas danau dengan perahu bebek cantik bersama orang-orang tersayang.',
    color: 'from-[var(--amber)] to-[var(--wood)]',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l9-9 9 9v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>
        <path d="M9 22V12h6v10"/>
      </svg>
    ),
    title: 'Dining Outdoor',
    desc: 'Menikmati makan siang di tengah alam terbuka dengan suasana yang tenang dan mewah.',
    color: 'from-[var(--forest)] to-[var(--forest-mid)]',
  },
]

const testimonials = [
  {
    name: 'Siti Rahma',
    location: 'Jember',
    rating: 5,
    text: 'Tempat yang luar biasa! Anak-anak sangat senang bermain di mini zoo dan perahu bebek. Makanannya juga enak dan harga terjangkau. Pasti akan kembali lagi!',
    avatar: 'SR',
  },
  {
    name: 'Budi Santoso',
    location: 'Surabaya',
    rating: 5,
    text: 'Destinasi wisata keluarga terbaik di Jember. Kebun buah naga sangat unik dan menarik. Suasana alam yang sejuk dan nyaman membuat betah berlama-lama.',
    avatar: 'BS',
  },
  {
    name: 'Dewi Kurniasari',
    location: 'Malang',
    rating: 5,
    text: 'Konsep agrowisata yang sangat kreatif. Bisa wisata sekaligus menikmati kuliner otentik Indonesia. Pelayanannya ramah dan tempatnya sangat bersih.',
    avatar: 'DK',
  },
]

export default function HomeClient() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.4}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="page-enter">
      <ScrollRevealInit />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 hero-parallax">
          <Image
            src="/images/hero-bg.jpg"
            alt="Pemandangan alam Agrowisata Cafe Resto Gading Asri"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
         <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 via-gray-700/30 to-gray-900/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[var(--gold)] text-xs tracking-[0.4em] uppercase mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Agrowisata Cafe Resto &bull; Jember, Jawa Timur
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[var(--cream)] leading-tight text-balance mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Nikmati Kuliner dan Wisata Keluarga dalam Satu Tempat
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Destinasi agrowisata terpadu yang memadukan keindahan alam, kuliner autentik, dan
            aktivitas keluarga yang tak terlupakan di jantung Jember.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Link
              href="/wisata"
              className="px-8 py-4 bg-[var(--gold)] text-[var(--forest)] text-sm tracking-widest uppercase rounded-full font-semibold transition-all duration-300 hover:bg-[var(--amber)] hover:scale-105 hover:shadow-xl"
            >
              Jelajahi Wisata
            </Link>
            <Link
              href="/menu"
              className="px-8 py-4 border border-white/40 text-[var(--cream)] text-sm tracking-widest uppercase rounded-full font-light transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Lihat Menu
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <svg className="text-[var(--gold)]/70" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 px-6 bg-[var(--cream)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="text-[var(--forest-mid)] text-xs tracking-[0.3em] uppercase mb-4">Tentang Kami</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--forest)] leading-snug text-balance mb-6">
                Alam yang Asri, Kuliner yang Lezat
              </h2>
              <div className="w-12 h-0.5 bg-[var(--gold)] mb-6" />
              <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                Agrowisata Cafe Resto Gading Asri adalah destinasi wisata keluarga yang menghadirkan
                pengalaman unik memadukan pertanian, alam, kuliner, dan rekreasi dalam satu kawasan.
              </p>
              <p className="text-[var(--foreground)]/70 leading-relaxed mb-8">
                Berlokasi di Jember, Jawa Timur, kami menawarkan kebun buah naga, mini zoo, kolam
                perahu, taman bermain, dan restoran outdoor yang dikelilingi pemandangan alam yang
                indah dan menyegarkan.
              </p>
              <Link
                href="/wisata"
                className="inline-flex items-center gap-2 text-[var(--forest)] text-sm tracking-wider uppercase border-b border-[var(--forest)]/40 pb-1 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-300"
              >
                Selengkapnya
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            <div className="reveal-right grid grid-cols-2 gap-4">
              <div className="img-zoom rounded-2xl overflow-hidden aspect-[3/4]">
                <Image src="/images/dragon-fruit.jpg" alt="Kebun buah naga" fill className="object-cover" />
              </div>
              <div className="img-zoom rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                <Image src="/images/outdoor-dining.jpg" alt="Outdoor dining" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[var(--forest)] py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '5+', label: 'Wahana Wisata' },
            { value: '50+', label: 'Menu Pilihan' },
            { value: '1000+', label: 'Keluarga Bahagia' },
            { value: '5★', label: 'Rating Pelanggan' },
          ].map((stat, i) => (
            <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="font-serif text-4xl font-semibold text-[var(--gold)]">{stat.value}</div>
              <div className="text-white/50 text-xs tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-24 px-6 bg-[var(--cream-dark)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[var(--forest-mid)] text-xs tracking-[0.3em] uppercase mb-3">Yang Kami Tawarkan</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--forest)] text-balance">
              Pengalaman Tak Terlupakan
            </h2>
            <div className="w-12 h-0.5 bg-[var(--gold)] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="reveal bg-[var(--cream)] rounded-2xl p-8 group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-default border border-[var(--border)]"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-[var(--cream)] mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[var(--forest)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--foreground)]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-24 px-6 bg-[var(--cream)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[var(--forest-mid)] text-xs tracking-[0.3em] uppercase mb-3">Galeri</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--forest)] text-balance">
              Pesona Gading Asri
            </h2>
            <div className="w-12 h-0.5 bg-[var(--gold)] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/hero-bg.jpg', alt: 'Pemandangan alam', span: 'md:col-span-2 md:row-span-2' },
              { src: '/images/dragon-fruit.jpg', alt: 'Kebun buah naga' },
              { src: '/images/mini-zoo.jpg', alt: 'Mini zoo' },
              { src: '/images/paddle-boat.jpg', alt: 'Perahu bebek' },
              { src: '/images/gazebo.jpg', alt: 'Gazebo' },
              { src: '/images/outdoor-dining.jpg', alt: 'Outdoor dining' },
            ].map((img, i) => (
              <div
                key={i}
                className={`img-zoom rounded-xl overflow-hidden relative ${img.span ?? ''} ${i === 0 ? 'aspect-video' : 'aspect-square'} reveal-scale`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-[var(--forest)]/0 group-hover:bg-[var(--forest)]/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-[var(--forest)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="leaf-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="white"/>
            </pattern>
            <rect width="100" height="100" fill="url(#leaf-pattern)"/>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 reveal">
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3">Testimoni</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--cream)] text-balance">
              Kata Mereka tentang Kami
            </h2>
            <div className="w-12 h-0.5 bg-[var(--gold)] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="reveal bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[var(--gold)]/30 transition-colors duration-300"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <svg key={si} className="text-[var(--gold)]" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] text-xs font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-[var(--cream)] text-sm font-medium">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-[var(--parchment)]">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-[var(--forest-mid)] text-xs tracking-[0.3em] uppercase mb-4">Kunjungi Kami</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--forest)] text-balance mb-6">
            Buat Momen Tak Terlupakan Bersama Keluarga
          </h2>
          <p className="text-[var(--foreground)]/60 leading-relaxed mb-10 max-w-xl mx-auto">
            Hubungi kami sekarang untuk reservasi meja atau informasi paket wisata keluarga yang sesuai
            dengan kebutuhan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[var(--forest)] text-[var(--cream)] text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-[var(--forest-mid)] hover:scale-105 hover:shadow-xl"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Chat WhatsApp
            </a>
            <Link
              href="/menu#contact"
              className="px-8 py-4 border border-[var(--forest)]/30 text-[var(--forest)] text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:border-[var(--forest)] hover:bg-[var(--forest)]/5"
            >
              Info Kontak
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
