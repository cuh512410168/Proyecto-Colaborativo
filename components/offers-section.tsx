import { Flame, Percent, Users } from 'lucide-react'

const offers = [
  {
    icon: Percent,
    title: 'Martes de Nonna',
    desc: 'Todas las pizzas clásicas al 2x1 durante todo el día. ¡Trae a un amigo!',
    badge: '2x1',
  },
  {
    icon: Users,
    title: 'Combo Famiglia',
    desc: 'Dos pizzas grandes, pan de ajo y una bebida de 1.5 L a precio especial.',
    badge: '-25%',
  },
  {
    icon: Flame,
    title: 'Happy Forno',
    desc: 'De 5 a 7 pm, cada pizza al horno de leña incluye un ingrediente extra gratis.',
    badge: 'Extra gratis',
  },
]

export function OffersSection() {
  return (
    <section id="ofertas" className="scroll-mt-20 bg-secondary/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Le Offerte</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Promociones para compartir
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <div
              key={o.title}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                {o.badge}
              </span>
              <div className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
                <o.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-foreground">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
