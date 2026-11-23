"use client"

export default function DashboardError({ error, retry }: { error: unknown; retry: () => void }) {
return (
<div>
<h2>Something went wrong!</h2>
<p>{error instanceof Error ? error.message : 'Unknown error'}</p>
<button onClick={() => retry()}>Try again</button>
</div>
)
}
