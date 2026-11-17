// src/app/products/page.tsx (Server Component)
import ProductGrid from './ProductGrid';
import type { Product } from './types';

export default async function ProductsPage() {
    // 1. Create src/app/products/types.ts with the Product type above.
    // 2. Complete src/app/products/page.tsx: expand the mock products array to include
    // at least 4-6 items with id, name, price, image, and likes. For image, use the SVG files
    // the scaffold already put in public/: /globe.svg, /file.svg, /window.svg,
    // /next.svg, /vercel.svg.
    // 3. Keep this component as a plain (async) server component - no 'use client', no hooks.
    const products: Product[] = [
    {
        id: 1,
        name: 'Product A',
        price: 100,
        image: '/globe.svg',
        likes: 0
    },
    {
        id: 2,
        name: 'Product B',
        price: 150,
        image: '/file.svg',
        likes: 0
    },
    {
        id: 3,
        name: 'Product C',
        price: 200,
        image: '/window.svg',
        likes: 0
    },
    {
        id: 4,
        name: 'Product D',
        price: 250,
        image: '/next.svg',
        likes: 0
    },
    {
        id: 5,
        name: 'Product E',
        price: 300,
        image: '/vercel.svg',
        likes: 0
    }

    ];
    return (
        <div className="container">
            <h1>Our Products</h1>
            <ProductGrid products={products} />
        </div>
    );
}