//Create src/app/dashboard/components/ProductCard.tsx that shows a product's
//name, category, price, and stock status.

interface Product {
    id: number
    name: string
    category: string
    price: number
    inStock: boolean
}

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="border p-4">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
        </div>
    )
}