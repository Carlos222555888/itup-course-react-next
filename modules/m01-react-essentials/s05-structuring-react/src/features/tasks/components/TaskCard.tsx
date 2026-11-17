import type { Task } from '../../../types/task';
import { formatDate } from '../../../lib/formatDate';

interface TaskCardProps {
    task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.completed ? 'Completed' : 'Not completed'}</p>
            <p>Created at: {formatDate(new Date(task.createdAt))}</p>
        </div>
    );
};