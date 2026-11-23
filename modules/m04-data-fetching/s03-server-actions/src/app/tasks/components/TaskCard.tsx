//Client: toggle, delete, edit, upload

//Create src/app/tasks/components/TaskCard.tsx as a 'use client' component
//that receives task: Task. It shows the title, the description, the priority as a colored
//badge, and the attachment name. Completed tasks get a different style.

//3. Toggle and delete - call the actions inside a transition, so isPending tells you when they
//are running

'use client'

import { useActionState, useState, useTransition } from "react"
import { toggleTaskComplete, uploadTaskAttachment } from "../actions"


const [isPending, startTransition] = useTransition()
const [message, setMessage] = useState('')
function handleToggleComplete() {
startTransition(async () => {
const result = await toggleTaskComplete(task.id)
setMessage(result.message ?? '')
})

}
function handleDelete() {
if (!confirm(`Delete "${task.title}"?`)) return
startTransition(async () => {
const result = await deleteTask(task.id)
setMessage(result.message ?? '')
})
}

const updateThisTask = updateTask.bind(null, task.id)
const [editState, editAction, isSaving] = useActionState(
async (prevState: ActionState, formData: FormData) => {
const result = await updateThisTask(prevState, formData)
if (result.success) setIsEditing(false)
return result
},
{}
)



//Upload - a small form with <input type="file" name="attachment" /> and an
//"Attach" button, connected to
//useActionState(uploadTaskAttachment.bind(null, task.id), {}). Show
//uploadState.message under it.
const [uploadState, uploadAction] = useActionState(
uploadTaskAttachment.bind(null, task.id),
{
    
}
)