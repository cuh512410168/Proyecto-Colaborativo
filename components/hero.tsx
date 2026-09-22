import { Flame, Truck, Wheat } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        <div className="relative z-10">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Dal 1962 · Horno de leña
          </p>
          <h1 className="text-balance font-serif text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            El sabor de la <span className="text-primary">vieja Italia</span>, recién salido del horno
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Masa fermentada 48 horas, ingredientes seleccionados y ese aroma a horno de leña que
            sabe a hogar. Arma tu pizza a tu gusto y déjanos consentirte.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03] active:scale-95"
            >
              Ver el menú
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Nuestra historia
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <li className="flex items-center gap-2 text-foreground/80">
              <Flame className="size-5 text-primary" /> Horno de leña
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <Wheat className="size-5 text-secondary" /> Masa de 48 h
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <Truck className="size-5 text-accent" /> Envío en 30 min
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -rotate-3 rounded-[2rem] bg-secondary/10" aria-hidden />
          <div className="absolute -inset-2 rotate-2 rounded-[2rem] border-2 border-dashed border-primary/25" aria-hidden />
          <img
            src="/images/hero-pizza.png"
            alt="Pizza artesanal recién horneada sobre mesa rústica de madera"
            className="relative aspect-square w-full rounded-[1.75rem] object-cover shadow-xl"
          />
          <div className="absolute -bottom-5 left-6 rotate-[-4deg] rounded-xl bg-card px-5 py-3 shadow-lg ring-1 ring-border">
            <p className="font-serif text-2xl font-bold text-primary">100% artesanal</p>
            <p className="text-xs text-muted-foreground">hecha a mano, como la nonna</p>
          </div>
        </div>
      </div>
    </section>
  )
}
