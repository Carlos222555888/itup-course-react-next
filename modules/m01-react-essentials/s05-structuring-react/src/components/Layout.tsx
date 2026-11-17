interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <header>
                <h1>Task Manager</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>2026 Task Manager</p>
            </footer>
        </>
    );
}