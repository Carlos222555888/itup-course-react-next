// a search input and a
// category <select> (with an "All categories" option plus categories). It receives
// filters and onChange props and holds no state of its own.

interface FilterPanelProps {
    filters: {
        search: string
        category: string
    }
    onChange: (filters: { search: string; category: string }) => void
}

export default function FilterPanel({ filters, onChange }: FilterPanelProps) {
    return (
        <div>
            <input
                type="text"
                value={filters.search}
                onChange={(e) => onChange({ ...filters, search: e.target.value })}
                placeholder="Search..."
            />
            <select
                value={filters.category}
                onChange={(e) => onChange({ ...filters, category: e.target.value })}
            >
                <option value="all">All categories</option>
                <option value="Books">Books</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
            </select>
        </div>
    )
}
