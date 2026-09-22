'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export type CartItem = {
  key: string
  name: string
  basePrice: number
  extras: { name: string; price: number }[]
  unitPrice: number
  quantity: number
  image?: string
}

type CartContextType = {
  items: CartItem[]
  isOpen: boolean
  count: number
  subtotal: number
  openCart: () => void
  closeCart: () => void
  addItem: (item: Omit<CartItem, 'key' | 'quantity' | 'unitPrice'>) => void
  updateQuantity: (key: string, delta: number) => void
  removeItem: (key: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextType | null>(null)

function buildKey(name: string, extras: { name: string }[]) {
  return `${name}::${extras.map((e) => e.name).sort().join('|')}`
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  function addItem(item: Omit<CartItem, 'key' | 'quantity' | 'unitPrice'>) {
    const key = buildKey(item.name, item.extras)
    const unitPrice = item.basePrice + item.extras.reduce((sum, e) => sum + e.price, 0)
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, quantity: i.quantity + 1 } : i))
      }
      return [...prev, { ...item, key, unitPrice, quantity: 1 }]
    })
    setIsOpen(true)
  }

  function updateQuantity(key: string, delta: number) {
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0),
    )
  }

  function removeItem(key: string) {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, i) => {
        acc.count += i.quantity
        acc.subtotal += i.quantity * i.unitPrice
        return acc
      },
      { count: 0, subtotal: 0 },
    )
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        count,
        subtotal,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        updateQuantity,
        removeItem,
        clear: () => setItems([]),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
