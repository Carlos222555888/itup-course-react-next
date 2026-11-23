//Task, TaskInput, ActionState

export type Priority = 'LOW' | 'MEDIUM' | 'HIGH'
export interface Task {
id: string
title: string
description: string
priority: Priority
completed: boolean
attachment: string | null
createdAt: Date
}
export interface TaskInput {
title: string
description: string
priority: Priority
}
// What every Server Action returns to the UI
export interface ActionState {
success?: boolean
message?: string
errors?: {
title?: string[]
description?: string[]
priority?: string[]
}
// The submitted values, sent back after a validation error so the form keeps them
values?: Partial<Record<keyof TaskInput, string>>
}