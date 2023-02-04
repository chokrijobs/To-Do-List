import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Buy groceries', completed: false },
    { id: 2, description: 'Do laundry', completed: false },
    { id: 3, description: 'Write blog post', completed: true },
  ]);

  const addTask = (description) => {
    setTasks([...tasks, { id: Date.now(), description, completed: false }]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <NewTaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
