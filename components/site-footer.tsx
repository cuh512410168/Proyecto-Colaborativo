import { Pizza } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Pizza className="size-5" />
          </span>
          <span className="font-serif text-xl font-bold">Trattoria Bella Nonna</span>
        </div>
        <p className="max-w-md text-sm text-background/70">
          Pizzas artesanales al horno de leña, hechas con amor desde 1962.
        </p>
        <div className="flex gap-6 text-sm font-medium text-background/80">
          <a href="#menu" className="hover:text-accent">Menú</a>
          <a href="#ofertas" className="hover:text-accent">Ofertas</a>
          <a href="#nosotros" className="hover:text-accent">Nosotros</a>
          <a href="#contacto" className="hover:text-accent">Contacto</a>
        </div>
        <p className="mt-2 text-xs text-background/50">
          © {new Date().getFullYear()} Bella Nonna · Buon appetito!
        </p>
      </div>
    </footer>
  )
}
