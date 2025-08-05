import React, { useState } from 'react';
import './style.css';

function Todos({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  // Filter tasks based on status and filter selected
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return todo.status !== 'deleted';
    if (filter === 'pending') return todo.status === 'pending';
    if (filter === 'completed') return todo.status === 'completed';
    return true;
  });

  // Add new task
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: newTodo.trim(),
      status: 'pending',
    };

    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  // Toggle between completed and pending
  const toggleCompletion = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === 'completed' ? 'pending' : 'completed',
            }
          : todo
      )
    );
  };

  // Mark task as deleted
  const deleteTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, status: 'deleted' } : todo
      )
    );
  };

  return (
    <div className="container mt-4 todo-container">
      <h2 className="text-center mb-4">Task Manager</h2>

      {/* Filter Buttons */}
      <div
        className="btn-group d-flex justify-content-center mb-3"
        role="group"
        aria-label="Filter tasks"
      >
        <button
          className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
          style={{ whiteSpace: 'nowrap' }}
        >
          All
        </button>
        <button
          className={`btn btn-outline-success ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
          style={{ whiteSpace: 'nowrap' }}
        >
          Completed
        </button>
        <button
          className={`btn btn-outline-warning ${filter === 'pending' ? 'active' : ''}`}
          onClick={() => setFilter('pending')}
          style={{ whiteSpace: 'nowrap' }}
        >
          Pending
        </button>
      </div>

      {/* Add New Task Form */}
      <form onSubmit={handleAddTodo} className="d-flex mb-4 justify-content-center">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task..."
          className="form-control me-2 todo-input"
        />
        <button type="submit" className="btn btn-success">
          Add Task
        </button>
      </form>

      {/* Task List */}
      {filteredTodos.length === 0 ? (
        <p className="text-center">No tasks to show</p>
      ) : (
        filteredTodos.map((todo, index) => (
          <div key={todo.id} className="todo-box">
            <div
              className="todo-item"
              onClick={() => toggleCompletion(todo.id)}
              title="Click to toggle complete"
              style={{
                textDecoration: todo.status === 'completed' ? 'line-through' : 'none',
              }}
            >
              {index + 1}. {todo.text}
            </div>
            <button
              className="btn btn-sm btn-danger delete-btn"
              onClick={() => deleteTodo(todo.id)}
              title="Delete task"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Todos;
