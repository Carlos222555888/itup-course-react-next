/**
 3. Create src/app/dashboard/components/ProductGrid.tsx, mark it 'use client',
and accept an initialProducts: Product[] prop.
4. Keep the filters in state with
useState<ProductFilters>({ category: 'all', search: '' }), and render
<FilterPanel filters={filters} onChange={setFilters} /> in a sidebar next
to the grid.
5. Write a fetcher that throws when the response is not OK - fetch itself does not reject
on a 404 or 500, so without this SWR never reports an error
const fetcher = async (url: string): Promise<Product[]> => {
const res = await fetch(url)
if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
return res.json()
}
 */
'use client'

import { useState } from 'react'
import FilterPanel from './FilterPanel'
import ProductCard from './ProductCard'
import useSWR from 'swr'
// import useSWR from 'swr'

interface Product {
    id: number
    name: string
    category: string
    price: number
    inStock: boolean
}

interface ProductFilters {
    search: string
    category: string
}

interface ProductGridProps {
    initialProducts: Product[]
}
const fetcher = async (url: string): Promise<Product[]> => {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
    return res.json()
}


export default function ProductGrid({ initialProducts }: ProductGridProps) {
    const [filters, setFilters] = useState<ProductFilters>({ category: 'all', search: '' })

    const filteredProducts = initialProducts.filter((product) => {
        const matchesCategory = filters.category === 'all' || product.category === filters.category
        const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase())
        return matchesCategory && matchesSearch
    })

const queryString = new URLSearchParams({ ...filters }).toString()
const { data: products = [], error, isValidating, mutate } = useSWR(
`/api/products?${queryString}`,
fetcher,
{
fallbackData: initialProducts,
keepPreviousData: true,
revalidateOnFocus: false,
refreshInterval: 30000,
}
)
    // Add a "Refresh" button that calls mutate() (disable it and show "Refreshing..." while
    // isValidating).
    const handleRefresh = () => {
        mutate()
    }
    // When error is set, show the error message with a "Retry" button that calls mutate(),
    // instead of the grid.

    // Map products into ProductCard components

    return (
        <div className="flex">
            <aside className="w-1/4">
                <FilterPanel filters={filters} onChange={setFilters} />
            </aside>
            <main className="w-3/4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {error ? (
                    <div className="col-span-full">
                        <p className="text-red-500">Error: {error.message}</p>
                        <button
                            onClick={handleRefresh}
                            disabled={isValidating}
                            className="mb-4 p-2 bg-blue-500 text-white rounded"
                        >
                            {isValidating ? 'Retrying...' : 'Retry'}
                        </button>
                    </div>
                ) : (
                    <>
                        <button
                            onClick={handleRefresh}
                            disabled={isValidating}
                            className="mb-4 p-2 bg-blue-500 text-white rounded"
                        >
                            {isValidating ? 'Refreshing...' : 'Refresh'}
                        </button>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </>
                )}
            </main>
        </div>
    )
}