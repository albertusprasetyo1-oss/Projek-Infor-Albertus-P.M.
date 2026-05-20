'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollRevealInit } from './scroll-reveal'

const categories = ['Semua', 'Makanan Indonesia', 'Seafood', 'Minuman'] as const
type Category = (typeof categories)[number]

interface MenuItem {
  name: string
  desc: string
  price: string
  category: Exclude<Category, 'Semua'>
  badge?: string
  image: string
}

const menuItems: MenuItem[] = [
  // Makanan Indonesia
  {
    name: 'Nasi Goreng Gading',
    desc: 'Nasi goreng spesial dengan bumbu rempah pilihan, telur, ayam suwir, dan kerupuk renyah.',
    price: 'Rp 35.000',
    category: 'Makanan Indonesia',
    badge: 'Best Seller',
    image: '/images/indonesian-food.jpg',
  },
  {
    name: 'Ayam Bakar Khas',
    desc: 'Ayam bakar dengan bumbu kuning tradisional Jawa, disajikan dengan lalapan segar dan sambal.',
    price: 'Rp 45.000',
    category: 'Makanan Indonesia',
    image: '/images/indonesian-food.jpg',
  },
  {
    name: 'Soto Ayam Jember',
    desc: 'Soto khas Jember dengan kuah bening gurih, suwiran ayam, lontong, dan kerupuk udang.',
    price: 'Rp 28.000',
    category: 'Makanan Indonesia',
    badge: 'Khas Lokal',
    image: '/images/indonesian-food.jpg',
  },
  {
    name: 'Nasi Pecel Komplit',
    desc: 'Nasi pecel dengan sayuran segar, bumbu kacang khas, tempe goreng, dan rempeyek.',
    price: 'Rp 25.000',
    category: 'Makanan Indonesia',
    image: '/images/indonesian-food.jpg',
  },
  {
    name: 'Rawon Daging',
    desc: 'Rawon khas Jawa Timur dengan daging sapi empuk, kuah hitam kluwek, dan pelengkap lengkap.',
    price: 'Rp 42.000',
    category: 'Makanan Indonesia',
    image: '/images/indonesian-food.jpg',
  },
  {
    name: 'Bebek Goreng Crispy',
    desc: 'Bebek goreng renyah dengan bumbu kuning meresap, disajikan dengan sambal hijau dan lalapan.',
    price: 'Rp 55.000',
    category: 'Makanan Indonesia',
    badge: 'Rekomendasi',
    image: '/images/indonesian-food.jpg',
  },
  // Seafood
  {
    name: 'Ikan Bakar Bumbu Bali',
    desc: 'Ikan segar pilihan dibakar dengan bumbu Bali yang kaya rempah, disajikan dengan nasi putih.',
    price: 'Rp 65.000',
    category: 'Seafood',
    badge: 'Best Seller',
    image: '/images/seafood.jpg',
  },
  {
    name: 'Udang Goreng Mentega',
    desc: 'Udang jumbo segar digoreng dengan mentega, bawang putih, dan saus spesial yang gurih.',
    price: 'Rp 75.000',
    category: 'Seafood',
    image: '/images/seafood.jpg',
  },
  {
    name: 'Cumi Asam Manis',
    desc: 'Cumi segar dimasak dengan saus asam manis yang segar, cocok dinikmati bersama nasi hangat.',
    price: 'Rp 60.000',
    category: 'Seafood',
    image: '/images/seafood.jpg',
  },
  {
    name: 'Kepiting Saus Tiram',
    desc: 'Kepiting segar dimasak dengan saus tiram gurih khas, porsi besar untuk keluarga.',
    price: 'Rp 95.000',
    category: 'Seafood',
    badge: 'Premium',
    image: '/images/seafood.jpg',
  },
  // Minuman
  {
    name: 'Es Buah Naga Segar',
    desc: 'Minuman segar dari buah naga kebun kami sendiri, manis alami dan menyegarkan.',
    price: 'Rp 18.000',
    category: 'Minuman',
    badge: 'Favorit',
    image: '/images/indonesian-food.jpg',
  },
  {
    name: 'Jus Alpukat Kental',
    desc: 'Jus alpukat kental dengan susu kental manis dan coklat, segar dan mengenyangkan.',
    price: 'Rp 20.000',
    category: 'Minuman',
    image: '/images/indonesian-food.jpg',
  },
  {
    name: 'Es Teh Manis',
    desc: 'Teh manis segar dengan es batu, pilihan sempurna untuk menemani makan siang.',
    price: 'Rp 8.000',
    category: 'Minuman',
    image: '/images/indonesian-food.jpg',
  },
  {
    name: 'Lemon Tea Hangat',
    desc: 'Teh dengan perasan lemon segar yang menyegarkan, cocok untuk bersantai di gazebo.',
    price: 'Rp 12.000',
    category: 'Minuman',
    image: '/images/indonesian-food.jpg',
  },
]

const badgeColors: Record<string, string> = {
  'Best Seller': 'bg-[var(--gold)]/20 text-[var(--wood)] border border-[var(--gold)]/30',
  'Khas Lokal': 'bg-[var(--forest)]/10 text-[var(--forest)] border border-[var(--forest)]/20',
  Rekomendasi: 'bg-[var(--forest-mid)]/10 text-[var(--forest-mid)] border border-[var(--forest-mid)]/20',
  Premium: 'bg-[var(--amber)]/20 text-[var(--wood)] border border-[var(--amber)]/30',
  Favorit: 'bg-[var(--gold)]/20 text-[var(--wood)] border border-[var(--gold)]/30',
}

export default function MenuClient() {
  const [activeCategory, setActiveCategory] = useState<Category>('Semua')

  const filtered =
    activeCategory === 'Semua'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <main className="page-enter">
      <ScrollRevealInit />

      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/indonesian-food.jpg"
            alt="Menu kuliner Agrowisata Gading Asri"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/90 via-[var(--forest)]/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-[var(--gold)] text-xs tracking-[0.4em] uppercase mb-4 animate-fade-in-up">
            Kuliner Autentik &bull; Gading Asri
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[var(--cream)] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Menu &amp; Kontak
          </h1>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="py-20 px-6 bg-[var(--cream)]" id="menu">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-[var(--forest-mid)] text-xs tracking-[0.3em] uppercase mb-3">Pilihan Kuliner</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--forest)] text-balance">
              Sajian Lezat Kami
            </h2>
            <div className="w-12 h-0.5 bg-[var(--gold)] mx-auto mt-5 mb-8" />

            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[var(--forest)] text-[var(--cream)] shadow-md'
                      : 'bg-[var(--parchment)] text-[var(--foreground)]/60 hover:bg-[var(--forest)]/10 hover:text-[var(--forest)] border border-[var(--border)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group reveal"
                style={{ transitionDelay: `${(i % 8) * 0.06}s` }}
              >
                <div className="img-zoom relative h-44 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                  {item.badge && (
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${badgeColors[item.badge]}`}>
                        {item.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg font-medium text-[var(--forest)] leading-snug">{item.name}</h3>
                  </div>
                  <p className="text-xs text-[var(--foreground)]/55 leading-relaxed mb-3 line-clamp-2">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base font-semibold text-[var(--wood)]">{item.price}</span>
                    <span className="text-xs text-[var(--foreground)]/40 px-2 py-1 rounded-full bg-[var(--muted)]">
                      {item.category === 'Makanan Indonesia' ? 'Makanan' : item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[var(--foreground)]/40 text-sm mt-10 reveal">
            * Harga dapat berubah sewaktu-waktu. Hubungi kami untuk informasi terkini.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 bg-[var(--cream-dark)]" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[var(--forest-mid)] text-xs tracking-[0.3em] uppercase mb-3">Hubungi Kami</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--forest)] text-balance">
              Temukan &amp; Kunjungi Kami
            </h2>
            <div className="w-12 h-0.5 bg-[var(--gold)] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="reveal-left flex flex-col gap-8">
              <div>
                <h3 className="font-serif text-2xl text-[var(--forest)] mb-6">Informasi Kontak</h3>
                <div className="flex flex-col gap-5">
                  {[
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      ),
                      label: 'Alamat',
                      value: 'Jl. Gading Asri, Jember, Jawa Timur 68121, Indonesia',
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.92 1.16h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      ),
                      label: 'Telepon / WhatsApp',
                      value: '+62 812-3456-7890',
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                      ),
                      label: 'Jam Operasional',
                      value: 'Setiap Hari, 08.00 – 21.00 WIB',
                    },
                  ].map((info, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[var(--forest)]/10 flex items-center justify-center text-[var(--forest)] shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-xs text-[var(--foreground)]/40 tracking-wider uppercase mb-0.5">{info.label}</div>
                        <div className="text-[var(--foreground)]/80 text-sm leading-relaxed">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[var(--cream)] rounded-2xl p-6 border border-[var(--border)]">
                <h4 className="font-serif text-lg text-[var(--forest)] mb-4">Jam Buka</h4>
                <div className="flex flex-col gap-2">
                  {[
                    { day: 'Senin – Jumat', time: '08.00 – 21.00 WIB' },
                    { day: 'Sabtu – Minggu', time: '07.00 – 22.00 WIB', note: 'Lebih ramai' },
                    { day: 'Hari Libur', time: '07.00 – 22.00 WIB' },
                  ].map((schedule, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-0">
                      <div>
                        <span className="text-sm text-[var(--foreground)]/70">{schedule.day}</span>
                        {schedule.note && (
                          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[var(--gold)]/20 text-[var(--wood)]">{schedule.note}</span>
                        )}
                      </div>
                      <span className="text-sm font-medium text-[var(--forest)]">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/6281234567890?text=Halo%20Gading%20Asri%2C%20saya%20ingin%20reservasi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl text-sm font-medium tracking-wider transition-all duration-300 hover:bg-[#1ebe5a] hover:scale-[1.02] hover:shadow-lg"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Chat WhatsApp Sekarang
              </a>
            </div>

            {/* Map */}
            <div className="reveal-right flex flex-col gap-6">
              <h3 className="font-serif text-2xl text-[var(--forest)]">Peta Lokasi</h3>
              <div className="rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg flex-1 min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63341.01280028449!2d113.67440979179688!3d-8.172463299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695f4e7c21acb%3A0x1d13741048f3f103!2sJember%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1716204800000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Agrowisata Cafe Resto Gading Asri Jember"
                />
              </div>
              <a
                href="https://maps.google.com/?q=Jember,Jawa+Timur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-[var(--forest)]/30 text-[var(--forest)] text-sm tracking-wider rounded-xl transition-all duration-300 hover:bg-[var(--forest)] hover:text-[var(--cream)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="py-20 px-6 bg-[var(--forest)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white transform translate-x-32 -translate-y-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white transform -translate-x-16 translate-y-16" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10 reveal">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">Reservasi</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--cream)] text-balance mb-5">
            Reservasi Meja untuk Pengalaman Terbaik
          </h2>
          <p className="text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
            Pesan tempat terlebih dahulu agar kami dapat menyiapkan pengalaman makan terbaik di lokasi pilihan Anda — gazebo, outdoor, atau ruang makan utama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Gading%20Asri%2C%20saya%20ingin%20reservasi%20meja"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-[var(--forest)] text-sm tracking-widest uppercase rounded-full font-semibold transition-all duration-300 hover:bg-[var(--amber)] hover:scale-105 hover:shadow-xl"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Reservasi via WhatsApp
            </a>
            <Link
              href="/wisata"
              className="px-8 py-4 border border-white/20 text-[var(--cream)] text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Lihat Wisata
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
