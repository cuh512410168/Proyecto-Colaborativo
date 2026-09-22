'use client'

import { useMemo, useState } from 'react'
import { Check, Plus } from 'lucide-react'
import { useCart } from './cart-context'
import { ingredients, type Pizza } from '@/lib/menu-data'

const categories = ['Quesos', 'Carnes', 'Verduras', 'Especiales'] as const

export function PizzaCard({ pizza }: { pizza: Pizza }) {
  const { addItem } = useCart()
  const [selected, setSelected] = useState<Record<string, boolean>>({})
  const [open, setOpen] = useState(false)

  const extras = useMemo(
    () => ingredients.filter((i) => selected[i.id]),
    [selected],
  )
  const total = pizza.price + extras.reduce((s, e) => s + e.price, 0)

  function toggle(id: string) {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function handleAdd() {
    addItem({
      name: pizza.name,
      basePrice: pizza.price,
      image: pizza.image,
      extras: extras.map((e) => ({ name: e.name, price: e.price })),
    })
    setSelected({})
    setOpen(false)
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={pizza.image || '/placeholder.svg'}
          alt={`Pizza ${pizza.name}`}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {pizza.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground shadow">
            {pizza.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-xl font-bold text-foreground">{pizza.name}</h3>
          <span className="whitespace-nowrap font-serif text-lg font-bold text-primary">
            ${pizza.price}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pizza.description}</p>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-4 self-start text-sm font-semibold text-secondary underline-offset-4 hover:underline"
        >
          {open ? 'Ocultar ingredientes' : 'Personalizar ingredientes'}
        </button>

        {open && (
          <div className="mt-4 rounded-xl border border-border bg-background/60 p-4">
            {categories.map((cat) => (
              <div key={cat} className="mb-3 last:mb-0">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  {cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {ingredients
                    .filter((i) => i.category === cat)
                    .map((ing) => {
                      const active = !!selected[ing.id]
                      return (
                        <button
                          key={ing.id}
                          onClick={() => toggle(ing.id)}
                          aria-pressed={active}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                            active
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border bg-card text-foreground hover:border-primary/50'
                          }`}
                        >
                          {active && <Check className="size-3" />}
                          {ing.name}
                          <span className={active ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                            +${ing.price}
                          </span>
                        </button>
                      )
                    })}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
          <div className="text-sm text-muted-foreground">
            Total{' '}
            <span className="font-serif text-lg font-bold text-foreground">${total}</span>
          </div>
          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-[1.03] active:scale-95"
          >
            <Plus className="size-4" /> Agregar
          </button>
        </div>
      </div>
    </article>
  )
}
