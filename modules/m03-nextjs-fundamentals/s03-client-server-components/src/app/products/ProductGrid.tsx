// src/app/products/ProductGrid.tsx (Server Component)
import ProductCard from './ProductCard';
import type { Product } from './types';

export default function ProductGrid({ products }: { products: Product[] }) {
    //Complete ProductGrid.tsx so it maps over products and renders a ProductCard per
    // item, using product.id as the key
    return (
        <div className="grid">
            {products.map((product) => (<ProductCard key={product.id} product={product} />))}
        </div>
    );
}