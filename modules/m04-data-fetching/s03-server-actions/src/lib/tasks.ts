// In-memory data layer (db)

import type { Task, TaskInput } from '@/types'

// In-memory "database". Kept on globalThis so it survives hot reloads in dev;
// it resets when the server restarts.
const globalForTasks = globalThis as unknown as { tasks?: Task[] }
const tasks: Task[] = (globalForTasks.tasks ??= [
    {
        id: '1',
        title: 'Prepare the sprint demo',
        description: 'Slides and a short live demo of the dashboard',
        priority: 'HIGH',
        completed: false,
        attachment: null,
        createdAt: new Date('2026-11-10T09:00:00'),
    },
    {
        id: '2',
        title: 'Review pull requests',
        description: '',
        priority: 'MEDIUM',
        completed: true,
        attachment: null,
        createdAt: new Date('2026-11-11T14:30:00'),
    },
])

// Simulates the latency of a real database
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const db = {async findAll(): Promise<Task[]> {
    await delay(300)
    return [...tasks].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
},
async findById(id: string): Promise<Task | undefined> {
    await delay(100)
    return tasks.find((task) => task.id === id)
},
async createTask(data: TaskInput): Promise<Task> {
    await delay(300)
    const task: Task = {
        id: crypto.randomUUID(),
        ...data,
        completed: false,
        attachment: null,
        createdAt: new Date(),
    }
    tasks.push(task)
    return task
},
async updateTask(id: string, data: Partial<Omit<Task, 'id' | 'createdAt'>>): Promise<Task | undefined> {
await delay(300)
const task = tasks.find((t) => t.id === id)
if (task) Object.assign(task, data)
return task
},
async deleteTask(id: string): Promise<boolean> {
await delay(300)
const index = tasks.findIndex((task) => task.id === id)
if (index === -1) return false
tasks.splice(index, 1)
return true
},
toggleTaskComplete(id: string): Promise<Task | undefined> {
    return this.updateTask(id, {
        completed: !(tasks.find((t) => t.id === id)?.completed ?? false)
    })
}
}