import type { SubmitEvent } from 'react';

interface TaskFormProps {
    onAddTask: (title: string) => void;
}

export const TaskForm = ({ onAddTask }: TaskFormProps) => {
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.elements.namedItem('title') as HTMLInputElement;
        onAddTask(input.value);
        input.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="Task title" required />
            <button type="submit">Add Task</button>
        </form>
    );
};