// src/app/products/ProductCard.tsx (Server Component)
import LikeButton from './LikeButton';
import type { Product } from './types';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
    //Complete ProductCard.tsx so it renders the product's image, name, and price, and
    // includes the LikeButton for that product. For the image, use Image from next/image
    // with width and height (as on the "Correct Pattern" slide).

    //1. Confirm ProductCard (server) passes productId and initialLikes down to
    // LikeButton (client) as plain serializable props.
    //2. Make sure no server-only logic (data fetching, secrets, etc.) is passed into or imported by
    // the client component.
    return (
        <div className="product-card">
            <Image src={product.image} alt={product.name} width={100} height={100} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <LikeButton productId={product.id} initialLikes={product.likes} />
        </div>
    );
}