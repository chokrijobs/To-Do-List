import React, { useState } from 'react';

const NewTaskForm = ({ addTask }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(description);
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default NewTaskForm;

