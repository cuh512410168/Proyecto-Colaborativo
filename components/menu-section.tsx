import { pizzas, ingredients } from '@/lib/menu-data'
import { PizzaCard } from './pizza-card'

export function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-secondary">Il Menù</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Elige tu pizza y hazla tuya
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada pizza se hornea a la leña bajo pedido. Personalízala con más de{' '}
            <span className="font-semibold text-foreground">{ingredients.length} ingredientes</span>{' '}
            frescos y agrégala al carrito.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  )
}
