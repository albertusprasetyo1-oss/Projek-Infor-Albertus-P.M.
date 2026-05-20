'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/wisata', label: 'Wisata' },
  { href: '/menu', label: 'Menu & Kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--forest)] shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="font-serif text-2xl font-semibold tracking-wide text-[var(--cream)] transition-opacity group-hover:opacity-80"
          >
            Gading Asri
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] font-light">
            Agrowisata Cafe Resto
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-sm tracking-widest uppercase font-light transition-colors duration-300
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px
                  after:transition-transform after:duration-300 after:origin-left
                  ${
                    pathname === link.href
                      ? 'text-[var(--gold)] after:bg-[var(--gold)] after:scale-x-100'
                      : 'text-[var(--cream)] hover:text-[var(--gold)] after:bg-[var(--gold)] after:scale-x-0 hover:after:scale-x-100'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 rounded-full border border-[var(--gold)] text-[var(--gold)] text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--forest)]"
            >
              Reservasi
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--cream)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--cream)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--cream)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 bg-[var(--forest)]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-widest uppercase font-light transition-colors duration-300 ${
                  pathname === link.href ? 'text-[var(--gold)]' : 'text-[var(--cream)] hover:text-[var(--gold)]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-[var(--gold)] text-[var(--gold)] text-xs tracking-widest uppercase"
            >
              Reservasi
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
