import { CartProvider } from '@/components/cart-context'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { MenuSection } from '@/components/menu-section'
import { OffersSection } from '@/components/offers-section'
import { AboutSection } from '@/components/about-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { SiteFooter } from '@/components/site-footer'
import { CartDrawer } from '@/components/cart-drawer'

export default function Page() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <OffersSection />
        <AboutSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
      <CartDrawer />
    </CartProvider>
  )
}
