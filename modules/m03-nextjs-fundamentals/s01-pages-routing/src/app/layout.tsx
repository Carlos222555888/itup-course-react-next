import './globals.css';
import Navigation from './components/Navigation';

export default function RootLayout({children,}: {children: React.ReactNode;}) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                <main>{children}</main>
                <footer>
                    <p>&copy; 2026 Carlos Rodrigues. All rights reserved.</p>
                </footer>
            </body>
        </html>
    );
}

