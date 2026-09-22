export type Pizza = {
  id: string
  name: string
  description: string
  price: number
  image: string
  tag?: string
}

export type Ingredient = {
  id: string
  name: string
  price: number
  category: 'Quesos' | 'Carnes' | 'Verduras' | 'Especiales'
}

export const pizzas: Pizza[] = [
  {
    id: 'margherita',
    name: 'Margherita',
    description: 'Salsa de tomate San Marzano, mozzarella fior di latte y albahaca fresca.',
    price: 149,
    image: '/images/pizza-margherita.png',
    tag: 'La clásica',
  },
  {
    id: 'diavola',
    name: 'Diavola',
    description: 'Salame picante, mozzarella, chile de árbol y un toque de miel.',
    price: 179,
    image: '/images/pizza-diavola.png',
    tag: 'Picante',
  },
  {
    id: 'formaggi',
    name: 'Quattro Formaggi',
    description: 'Mozzarella, gorgonzola, parmesano y provolone fundidos al horno.',
    price: 189,
    image: '/images/pizza-formaggi.png',
  },
  {
    id: 'ortolana',
    name: 'Ortolana',
    description: 'Calabacín, berenjena, pimientos y champiñones a la parrilla.',
    price: 169,
    image: '/images/pizza-ortolana.png',
    tag: 'Vegetariana',
  },
]

export const ingredients: Ingredient[] = [
  { id: 'mozzarella', name: 'Mozzarella extra', price: 18, category: 'Quesos' },
  { id: 'parmesano', name: 'Parmesano añejo', price: 22, category: 'Quesos' },
  { id: 'gorgonzola', name: 'Gorgonzola', price: 24, category: 'Quesos' },
  { id: 'ricotta', name: 'Ricotta fresca', price: 20, category: 'Quesos' },
  { id: 'prosciutto', name: 'Prosciutto di Parma', price: 34, category: 'Carnes' },
  { id: 'salame', name: 'Salame picante', price: 28, category: 'Carnes' },
  { id: 'pollo', name: 'Pollo a la parrilla', price: 26, category: 'Carnes' },
  { id: 'tocino', name: 'Tocino ahumado', price: 25, category: 'Carnes' },
  { id: 'champinon', name: 'Champiñones', price: 16, category: 'Verduras' },
  { id: 'pimiento', name: 'Pimientos asados', price: 15, category: 'Verduras' },
  { id: 'cebolla', name: 'Cebolla caramelizada', price: 14, category: 'Verduras' },
  { id: 'aceituna', name: 'Aceitunas Kalamata', price: 17, category: 'Verduras' },
  { id: 'rucula', name: 'Rúcula fresca', price: 14, category: 'Verduras' },
  { id: 'albahaca', name: 'Albahaca del huerto', price: 12, category: 'Verduras' },
  { id: 'trufa', name: 'Aceite de trufa', price: 38, category: 'Especiales' },
  { id: 'huevo', name: 'Huevo de granja', price: 15, category: 'Especiales' },
]
