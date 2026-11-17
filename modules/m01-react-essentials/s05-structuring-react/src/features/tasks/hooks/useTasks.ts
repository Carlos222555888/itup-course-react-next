import { useLocalStorage } from '../../../hooks/useLocalStorage';
import type { Task } from '../../../types/task';
import { generateId } from '../../../lib/generateId';   

// store the task list with
export const useTasks = () => {
    return useLocalStorage<Task[]>('tasks', []);
};

// Implement addTask(title: string) that builds a new Task (with a generated id,
// completed: false, and the current date) and appends it immutably.
export const addTask = (tasks: Task[], title: string) => {
    const newTask: Task = {
        id: generateId(),
        title,
        completed: false,
        createdAt: new Date()
    };
    return [...tasks, newTask];
};

// Implement toggleTask(id: string) that flips completed for the matching task, using
//.map to avoid mutating the array.
export const toggleTask = (tasks: Task[], id: string) => {
    return tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
};

// Return { tasks, addTask, toggleTask } from the hook
export const useTasksWithActions = () => {
    const [tasks, setTasks] = useTasks();

    const addTaskAction = (title: string) => setTasks(addTask(tasks, title));
    const toggleTaskAction = (id: string) => setTasks(toggleTask(tasks, id));

    return { tasks, addTask: addTaskAction, toggleTask: toggleTaskAction };
};