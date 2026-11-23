// Home page with a link to /tasks

import Link from "next/link"

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link href="/tasks">Go to Tasks</Link>
        </div>
    )
}