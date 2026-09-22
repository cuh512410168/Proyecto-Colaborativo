import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="nosotros" className="scroll-mt-20 bg-primary/5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] border-2 border-dashed border-secondary/30" aria-hidden />
            <img
              src="/images/story-oven.png"
              alt="Pizzaiolo horneando una pizza en el horno de leña de la trattoria"
              className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-xl"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">La Nostra Storia</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Tres generaciones amasando tradición
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Todo empezó en 1962, cuando la nonna Rosa encendió por primera vez el horno de leña en
              un pequeño local de barrio. Desde entonces cuidamos cada detalle: harina italiana, masa
              fermentada con calma y tomate San Marzano cultivado al pie del Vesubio.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Hoy seguimos horneando con la misma receta y el mismo cariño de siempre, porque para
              nosotros una pizza no se sirve: se comparte.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: '60+', l: 'años de historia' },
                { n: '48 h', l: 'de fermentación' },
                { n: '100%', l: 'horno de leña' },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="font-serif text-2xl font-bold text-primary">{s.n}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="contacto" className="mt-16 scroll-mt-20 grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm md:grid-cols-4 md:p-8">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-foreground">Visítanos</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Te esperamos con el horno encendido y la mesa lista.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 md:col-span-3 md:grid-cols-3">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Dirección</p>
                <p className="text-sm text-muted-foreground">Vía Roma 12, Colonia Centro</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Teléfono</p>
                <a href="tel:+525512345678" className="text-sm text-muted-foreground hover:text-primary">
                  +52 55 1234 5678
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Correo</p>
                <a
                  href="mailto:ciao@bellanonna.com"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  ciao@bellanonna.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Horario</p>
                <p className="text-sm text-muted-foreground">Lun a Dom · 1:00 pm – 11:00 pm</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
