//'use server' - all the Server Actions

'use server'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { db } from '@/lib/tasks'
import type { ActionState } from '@/types'

const taskSchema = z.object({
title: z.string().trim().min(1, 'Title is required').max(100, 'Title must be 100 characters or less'),
description: z.string().trim().max(500, 'Description must be 500 characters or less'),
priority: z.enum(['LOW', 'MEDIUM', 'HIGH'], 'Choose a priority'),
})

// formData.get() returns null for a missing field: use '' so Zod reports it and the form can show it again
function parseTask(formData: FormData) {
const values = {
title: String(formData.get('title') ?? ''),
description: String(formData.get('description') ?? ''),
priority: String(formData.get('priority') ?? ''),
}
return { values, result: taskSchema.safeParse(values) }
}

export async function createTask(prevState: ActionState, formData: FormData): Promise<ActionState> {
const { values, result } = parseTask(formData)
if (!result.success) {
return { errors: z.flattenError(result.error).fieldErrors, values }
}
await db.create(result.data)
revalidatePath('/tasks')
return { success: true, message: 'Task created' }
}

export async function updateTask(prevState: ActionState, id: string, formData: FormData): Promise<ActionState> {  
    const { values, result } = parseTask(formData)

        if (!result.success) { 
            return { errors: z.flattenError(result.error).fieldErrors, values }
        }

        const task = await db.update(id, result.data)

        if (!task) {
            return { success: false, message: 'Task not found' }
        }

        revalidatePath('/tasks')
        return { success: true, message: 'Task updated' }
}

export async function deleteTask(prevState: ActionState, id: string): Promise<ActionState> {
    const success = await db.delete(id)

    if (!success) {
        return { success: false, message: 'Task not found' }
    }

    revalidatePath('/tasks')
    return { success: true, message: 'Task deleted' }
}

export async function toggleTaskComplete(prevState: ActionState, id: string): Promise<ActionState> {
    const task = await db.findById(id)
    if (task) {
        await db.updateTask(id, { completed: !task.completed })
    }

    if (!task) {
        return { success: false, message: 'Task not found' }
    }

    revalidatePath('/tasks')
    return { success: true, message: 'Task updated' }
}

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB

export async function uploadTaskAttachment(taskId: string, prevState: ActionState, formData: FormData): Promise<ActionState> {
    const file = formData.get('attachment')
    // An empty file input still sends a File, with size 0
    if (!(file instanceof File) || file.size === 0) {
        return { message: 'Choose a file first' }
    }
    if (file.size > MAX_FILE_SIZE) {
        return { message: 'The file must be 5 MB or smaller' }
    }
    // In a real app: upload the file to storage here and save its URL
    const task = await db.update(taskId, { attachment: file.name })
    if (!task) return { message: 'Task not found' }
    revalidatePath('/tasks')
    return { success: true, message: `Attached ${file.name}` }
}