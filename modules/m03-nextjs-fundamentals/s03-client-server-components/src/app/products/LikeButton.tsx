// LikeButton.tsx (Client Component)
// 1. In LikeButton.tsx, keep the 'use client' directive at the top - this is what makes it a
// client component.
// 2. Add useState initialized from the initialLikes prop.
// 3. Add an onClick handler that increments the like count and updates the displayed
// number.
// 4. Render the current like count next to the heart emoji.

'use client'; // src/app/products/LikeButton.tsx (Client Component)
import { useState } from 'react';

export default function LikeButton({ productId, initialLikes }: { productId: number, initialLikes: number }) {
    // Setup state here
    const [likes, setLikes] = useState(initialLikes);

    return (
        <button onClick={() => setLikes(prevLikes => prevLikes + 1)}>
            &#x2764;&#xFE0F; {likes}
        </button>
);
}