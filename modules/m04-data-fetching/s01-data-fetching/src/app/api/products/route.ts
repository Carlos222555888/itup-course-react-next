/*
1. Create the folders src/app/api/products/ and, inside, the file route.ts.
2. Import NextRequest and NextResponse from next/server, and filterProducts
from @/lib/products.
3. Export an async function GET(request: NextRequest).
4. Read the query parameters from request.nextUrl.searchParams. For
/api/products?category=Books&search=code, searchParams.get('category')
returns 'Books' and searchParams.get('search') returns 'code'. A missing
parameter returns null, so give each one a default with ??: 'all' for the category, ''
for the search.
5. Simulate network latency with
await new Promise((resolve) => setTimeout(resolve, 500)), so you can see
the client-side loading state in Step 3.
6. Return NextResponse.json(filterProducts({ category, search })). The
filtering logic is the same function the page uses, from src/lib/products.ts, so the
route only translates the URL into a function call.
 */

import { NextRequest, NextResponse } from 'next/server'
import { filterProducts } from '../..//lib/products'

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl
    const category = searchParams.get('category') ?? 'all'
    const search = searchParams.get('search') ?? ''

    await new Promise((resolve) => setTimeout(resolve, 500))
    
    return NextResponse.json(filterProducts({ category, search }))
}