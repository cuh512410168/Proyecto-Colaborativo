'use client'

import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react'
import { useCart } from './cart-context'

const DELIVERY = 45

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count, clear } = useCart()

  const total = subtotal > 0 ? subtotal + DELIVERY : 0

  return (
    <>
      <div
        onClick={closeCart}
        aria-hidden
        className={`fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm transition-opacity ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        role="dialog"
        aria-label="Carrito de compras"
        aria-modal="true"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-foreground">
            <ShoppingCart className="size-5 text-primary" /> Tu carrito
            {count > 0 && <span className="text-base font-normal text-muted-foreground">({count})</span>}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="grid size-9 place-items-center rounded-full text-foreground/70 transition-colors hover:bg-muted"
          >
            <X className="size-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-muted">
                  <ShoppingCart className="size-7 text-muted-foreground" />
                </div>
                <p className="font-serif text-lg font-semibold text-foreground">Tu carrito está vacío</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Agrega una pizza del menú para empezar.
                </p>
              </div>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.key} className="flex gap-3 rounded-xl border border-border bg-card p-3">
                  {item.image && (
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      className="size-16 shrink-0 rounded-lg object-cover"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-serif font-bold text-foreground">{item.name}</p>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label={`Quitar ${item.name}`}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    {item.extras.length > 0 && (
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {item.extras.map((e) => e.name).join(', ')}
                      </p>
                    )}
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-full border border-border">
                        <button
                          onClick={() => updateQuantity(item.key, -1)}
                          aria-label="Quitar uno"
                          className="grid size-7 place-items-center rounded-full text-foreground hover:bg-muted"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-5 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, 1)}
                          aria-label="Agregar uno"
                          className="grid size-7 place-items-center rounded-full text-foreground hover:bg-muted"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <span className="font-serif font-bold text-primary">
                        ${item.unitPrice * item.quantity}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-border bg-card px-5 py-4">
            <dl className="space-y-1.5 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <dt>Subtotal</dt>
                <dd>${subtotal}</dd>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <dt>Envío</dt>
                <dd>${DELIVERY}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-2 font-serif text-lg font-bold text-foreground">
                <dt>Total</dt>
                <dd className="text-primary">${total}</dd>
              </div>
            </dl>
            <button className="mt-4 w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-[1.02] active:scale-95">
              Finalizar pedido
            </button>
            <button
              onClick={clear}
              className="mt-2 w-full rounded-full py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-destructive"
            >
              Vaciar carrito
            </button>
          </footer>
        )}
      </aside>
    </>
  )
}
