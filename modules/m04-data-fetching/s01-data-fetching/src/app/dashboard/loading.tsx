/*
Step 1 - Fetch the initial product list on the server
1. Create src/app/dashboard/page.tsx as an async Server Component that awaits
getProducts() and renders the products as a simple list for now.
2. Open http://localhost:3000/dashboard. Next.js shows a blocking route error: the page
waits for uncached data (the 1-second getProducts()) and has nothing to show in the
meantime.
3. Fix it by creating src/app/dashboard/loading.tsx that renders a placeholder (for
example "Loading dashboard..." or a few gray blocks). Reload the page: the placeholder
shows for a second, then the products appear.
!
The class repo enables Cache Components (`cacheComponents: true` in
`next.config.ts`). Data that is not cached must be shown inside a loading boundary
- `loading.tsx` or `` - so Next.js can send the rest of the page straight away and
stream the data in. Data that can be cached would use the `'use cache'` directive
instead. `next build` fails with the same error if the boundary is missing.
The page must call getProducts() directly. Do not fetch('/api/products') from a
Server Component: on the server a relative URL fails, and the request would be an
unnecessary round trip to your own server.
*/
export default function Loading() {
    return <p>Loading dashboard...</p>
}