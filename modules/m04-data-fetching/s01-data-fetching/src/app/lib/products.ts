import type { Product, ProductFilters } from '../types'

const products: Product[] = [
{ id: 1, name: 'Laptop Pro 14', category: 'Electronics', price: 1499, inStock: true },
{ id: 2, name: 'Wireless Mouse', category: 'Electronics', price: 29, inStock: true },
{ id: 3, name: 'Standing Desk', category: 'Furniture', price: 399, inStock: false },
{ id: 4, name: 'Office Chair', category: 'Furniture', price: 249, inStock: true },
{ id: 5, name: 'Clean Code', category: 'Books', price: 35, inStock: true },
{ id: 6, name: 'Learning React', category: 'Books', price: 42, inStock: false },
]

export const categories = ['Electronics', 'Furniture', 'Books']

export function filterProducts({ category, search }: ProductFilters): Product[] {
    const term = search.trim().toLowerCase()
    return products.filter((product) => (category === 'all' || product.category === category) && product.name.toLowerCase().includes(term))
}

// Simulates a slow database or API call
export async function getProducts(): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return filterProducts({ category: 'all', search: '' })
}