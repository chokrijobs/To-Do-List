import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Task from './Task';

describe('Task', () => {
    it('renders the task description', () => {
        const { getByText } = render(
            <Task task={{ id: 1, description: 'Buy groceries', completed: false }} />
        );
        expect(getByText('Buy groceries')).toBeInTheDocument();
    });

    it('strikes through the task description when completed', () => {
        const { getByText } = render(
            <Task task={{ id: 1, description: 'Buy groceries', completed: true }} />
        );
        expect(getByText('Buy groceries')).toHaveStyle('text-decoration: line-through;');
    });

    it('calls the toggleTaskCompletion prop when the checkbox is clicked', () => {
        const toggleTaskCompletion = jest.fn();
        const { getByText } = render(
            <Task task={{ id: 1, description: 'Buy groceries', completed: false }} toggleTaskCompletion={toggleTaskCompletion} />
        );
        fireEvent.click(getByText('Mark as complete'));
        expect(toggleTaskCompletion).toHaveBeenCalledWith(1);
    });

    it('calls the deleteTask prop when the delete button is clicked', () => {
        const deleteTask = jest.fn();
        const { getByText } = render(
            <Task task={{ id: 1, description: 'Buy groceries', completed: false }} deleteTask={deleteTask} />
        );
        fireEvent.click(getByText('Delete'));
        expect(deleteTask).toHaveBeenCalledWith(1);
    });
});
