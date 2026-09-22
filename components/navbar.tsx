'use client'

import { Pizza, ShoppingCart } from 'lucide-react'
import { useCart } from './cart-context'

const links = [
  { href: '#menu', label: 'Menú' },
  { href: '#ofertas', label: 'Ofertas' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const { count, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-primary">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Pizza className="size-5" />
          </span>
          <span className="font-serif text-lg font-bold leading-tight tracking-tight sm:text-xl">
            Bella Nonna
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={openCart}
          className="relative inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] active:scale-95"
        >
          <ShoppingCart className="size-4" />
          <span className="hidden sm:inline">Carrito</span>
          {count > 0 && (
            <span className="grid min-w-5 place-items-center rounded-full bg-accent px-1.5 text-xs font-bold text-accent-foreground">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
