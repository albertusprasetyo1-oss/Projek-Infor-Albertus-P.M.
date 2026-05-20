'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ScrollRevealInit } from './scroll-reveal'

const attractions = [
  {
    id: 'kebun-buah-naga',
    title: 'Kebun Buah Naga',
    subtitle: 'Dragon Fruit Garden',
    description:
      'Jelajahi kebun buah naga kami yang luas dan hijau. Saksikan buah naga merah dan putih tumbuh subur, pelajari cara budidaya, dan petik langsung dari pohonnya sebagai pengalaman agrowisata yang autentik dan edukatif.',
    image: '/images/dragon-fruit.jpg',
    features: ['Pemetikan langsung', 'Edukasi pertanian', 'Foto seru', 'Buah segar'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    color: 'var(--forest)',
    tag: 'Agro',
  },
  {
    id: 'kereta-mini',
    title: 'Kereta Mini',
    subtitle: 'Mini Train Ride',
    description:
      'Nikmati petualangan seru bersama keluarga dengan menaiki kereta mini yang melintasi kawasan kebun hijau dan area wisata. Sempurna untuk anak-anak dan memberikan pemandangan unik dari seluruh area agrowisata.',
    image: '/images/tourism-hero.jpg',
    features: ['Untuk semua usia', 'Keliling area wisata', 'Foto panorama', 'Aman & nyaman'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="12" rx="2"/>
        <path d="M4 8h16"/>
        <circle cx="8" cy="19" r="2"/>
        <circle cx="16" cy="19" r="2"/>
        <path d="M8 17V4M16 17V4M3 8 2 17h20l-1-9"/>
      </svg>
    ),
    color: 'var(--wood)',
    tag: 'Favorit',
  },
  {
    id: 'playground',
    title: 'Area Bermain',
    subtitle: 'Kids Playground',
    description:
      'Taman bermain modern dan aman dengan berbagai permainan seru untuk anak-anak segala usia. Dilengkapi dengan perosotan, ayunan, jungkat-jungkit, dan climbing wall yang mengembangkan kemampuan motorik si kecil.',
    image: '/images/mini-zoo.jpg',
    features: ['Aman & bersih', 'Berbagai permainan', 'Pengawasan aktif', 'Cocok semua usia'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
      </svg>
    ),
    color: 'var(--forest-mid)',
    tag: 'Anak-anak',
  },
  {
    id: 'area-satwa',
    title: 'Area Satwa',
    subtitle: 'Animal Area',
    description:
      'Kenalkan anak-anak dengan berbagai satwa jinak di area zoo mini kami. Dari kelinci lucu, kambing, merak cantik, hingga berbagai unggas menarik. Pengalaman berinteraksi langsung yang mendidik dan menyenangkan.',
    image: '/images/mini-zoo.jpg',
    features: ['Satwa jinak', 'Beri makan satwa', 'Edukasi alam', 'Foto bersama'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    color: 'var(--amber)',
    tag: 'Edukasi',
  },
  {
    id: 'rekreasi-keluarga',
    title: 'Rekreasi Keluarga',
    subtitle: 'Family Recreation',
    description:
      'Area rekreasi terbuka yang luas untuk aktivitas keluarga bersama. Nikmati perahu bebek di danau, area piknik di bawah pepohonan rindang, dan berbagai permainan outdoor yang mempererat ikatan keluarga.',
    image: '/images/paddle-boat.jpg',
    features: ['Perahu bebek', 'Area piknik', 'Permainan outdoor', 'Spot foto'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: 'var(--forest)',
    tag: 'Keluarga',
  },
  {
    id: 'gazebo',
    title: 'Area Gazebo',
    subtitle: 'Gazebo & Rest Area',
    description:
      'Bersantai di gazebo tradisional yang dikelilingi taman hijau yang asri. Nikmati angin sejuk dan pemandangan alam sambil menyantap hidangan lezat. Area sempurna untuk istirahat dan menikmati ketenangan alam.',
    image: '/images/gazebo.jpg',
    features: ['Pemandangan alam', 'Angin sejuk', 'Layanan makan', 'Tenang & nyaman'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    color: 'var(--wood)',
    tag: 'Relaksasi',
  },
]

const tagColors: Record<string, string> = {
  Agro: 'bg-[var(--forest)]/10 text-[var(--forest)]',
  Favorit: 'bg-[var(--amber)]/20 text-[var(--wood)]',
  'Anak-anak': 'bg-[var(--forest-mid)]/10 text-[var(--forest-mid)]',
  Edukasi: 'bg-[var(--amber)]/20 text-[var(--wood)]',
  Keluarga: 'bg-[var(--forest)]/10 text-[var(--forest)]',
  Relaksasi: 'bg-[var(--wood-light)]/20 text-[var(--wood)]',
}

export default function TourismClient() {
  return (
    <main className="page-enter">
      <ScrollRevealInit />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tourism-hero.jpg"
            alt="Wisata Agrowisata Gading Asri Jember"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/90 via-[var(--forest)]/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-[var(--gold)] text-xs tracking-[0.4em] uppercase mb-4 animate-fade-in-up">
            Agrowisata Gading Asri &bull; Jember
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[var(--cream)] leading-tight text-balance animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Wisata Alam &amp; Rekreasi
            <br />
            <span className="text-[var(--gold)]">Keluarga Terpadu</span>
          </h1>
        </div>
      </section>

      {/* BREADCRUMB & INTRO */}
      <section className="bg-[var(--cream)] py-12 px-6 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <nav className="flex items-center gap-2 text-xs text-[var(--foreground)]/40 mb-3" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[var(--forest)] transition-colors">Beranda</Link>
              <span>/</span>
              <span className="text-[var(--forest)]">Wisata</span>
            </nav>
            <p className="text-[var(--foreground)]/60 max-w-xl leading-relaxed">
              Temukan berbagai wahana wisata yang memadukan alam, edukasi, dan kesenangan dalam satu
              kawasan agrowisata yang asri di Jember, Jawa Timur.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-sm text-[var(--foreground)]/50">6 Wahana Tersedia</span>
            <div className="w-8 h-0.5 bg-[var(--gold)]" />
          </div>
        </div>
      </section>

      {/* ATTRACTIONS GRID */}
      <section className="py-20 px-6 bg-[var(--cream)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-20">
            {attractions.map((attr, i) => (
              <div
                key={attr.id}
                id={attr.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${i % 2 === 1 ? 'lg:col-start-2' : ''} reveal-scale`}>
                  <div className="img-zoom rounded-2xl overflow-hidden relative aspect-[4/3] shadow-xl">
                    <Image
                      src={attr.image}
                      alt={attr.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[attr.tag]}`}
                        style={{ backgroundColor: `${attr.color}20`, color: attr.color }}>
                        {attr.tag}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className={`${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} ${i % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--cream)]"
                      style={{ backgroundColor: attr.color }}
                    >
                      {attr.icon}
                    </div>
                    <span className="text-xs tracking-widest uppercase" style={{ color: attr.color }}>
                      {attr.subtitle}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--forest)] mb-4 text-balance">
                    {attr.title}
                  </h2>
                  <div className="w-10 h-0.5 mb-5" style={{ backgroundColor: attr.color }} />
                  <p className="text-[var(--foreground)]/65 leading-relaxed mb-7">{attr.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {attr.features.map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-[var(--foreground)]/70">
                        <svg className="shrink-0" style={{ color: attr.color }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISITOR INFO */}
      <section className="py-20 px-6 bg-[var(--forest)] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="300" cy="200" r="200" fill="white"/>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14 reveal">
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3">Informasi</p>
            <h2 className="font-serif text-4xl font-light text-[var(--cream)]">Panduan Kunjungan</h2>
            <div className="w-12 h-0.5 bg-[var(--gold)] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                title: 'Jam Buka',
                detail: 'Setiap Hari\n08.00 – 21.00 WIB',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 12V22H4V12"/>
                    <path d="M22 7H2v5h20V7z"/>
                    <path d="M12 22V7"/>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                  </svg>
                ),
                title: 'Harga Tiket',
                detail: 'Mulai Rp 15.000\nPer Orang',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                title: 'Lokasi',
                detail: 'Jl. Gading Asri\nJember, Jawa Timur',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.92 1.16h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                ),
                title: 'Hubungi',
                detail: '+62 812-3456-7890\nWhatsApp',
              },
            ].map((info, i) => (
              <div
                key={i}
                className="reveal bg-white/5 rounded-2xl p-8 border border-white/10 text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-[var(--gold)] flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-[var(--cream)] font-serif text-lg mb-2">{info.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed whitespace-pre-line">{info.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[var(--parchment)]">
        <div className="max-w-2xl mx-auto text-center reveal">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--forest)] mb-5 text-balance">
            Siap Berwisata Bersama Kami?
          </h2>
          <p className="text-[var(--foreground)]/60 leading-relaxed mb-8">
            Hubungi kami melalui WhatsApp atau kunjungi halaman menu untuk informasi kuliner dan reservasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-[var(--forest)] text-[var(--cream)] text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-[var(--forest-mid)] hover:scale-105"
            >
              Hubungi via WhatsApp
            </a>
            <Link
              href="/menu"
              className="px-8 py-4 border border-[var(--forest)]/30 text-[var(--forest)] text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:border-[var(--forest)]"
            >
              Lihat Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
