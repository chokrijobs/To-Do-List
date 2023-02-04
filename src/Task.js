import React from 'react';

const Task = ({ task, toggleTaskCompletion, deleteTask }) => (
    <li>
        <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
        />
        <span
            style={{
                textDecoration: task.completed ? 'line-through' : 'none',
            }}
        >
            {task.description}
        </span>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        <button onClick={() => toggleTaskCompletion(task.id)}>Mark as complete</button>
    </li>
);

export default Task;
