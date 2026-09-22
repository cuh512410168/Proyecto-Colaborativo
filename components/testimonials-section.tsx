import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Lucía M.',
    text: 'La mejor Margherita que he probado fuera de Nápoles. La masa es ligera y el sabor a leña es increíble.',
    role: 'Clienta desde 2019',
  },
  {
    name: 'Marco T.',
    text: 'Pedí una pizza personalizada con trufa y prosciutto. Llegó calientita y en tiempo récord. Volveré seguro.',
    role: 'Pedido a domicilio',
  },
  {
    name: 'Familia Rossi',
    text: 'El ambiente es acogedor y el trato como en casa. Los martes de 2x1 son nuestra tradición familiar.',
    role: 'Comensales frecuentes',
  },
]

export function TestimonialsSection() {
  return (
    <section id="opiniones" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-secondary">
            Le Recensioni
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Lo que dicen nuestros comensales
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-pretty leading-relaxed text-foreground">
                {`"${r.text}"`}
              </blockquote>
              <figcaption className="mt-4 border-t border-border pt-4">
                <p className="font-serif font-bold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
