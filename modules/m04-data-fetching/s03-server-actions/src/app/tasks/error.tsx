// Error boundary

//Upload - a small form with <input type="file" name="attachment" /> and an
//"Attach" button, connected to
//useActionState(uploadTaskAttachment.bind(null, task.id), {}). Show
//uploadState.message under it.

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