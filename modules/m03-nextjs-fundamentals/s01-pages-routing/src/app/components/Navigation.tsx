import Link from 'next/link';

export default function Navigation() {
  // 1. In Navigation.tsx, use Link from next/link (not a plain <a> tag) for the logo and
  // each nav item, pointing to /, /about, and /projects.
  // 2. Verify that clicking each link updates the page content without a full browser reload

return (
    <nav>
        <div className="nav-container">
            <Link href="/" className="logo">
                Your Name
            </Link>
            <ul className="nav-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
            </ul>
        </div>
    </nav>
);
}