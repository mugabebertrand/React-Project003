import React, { useState } from 'react';

function Todos({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: newTodo,
      status: 'pending',
    };
    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === 'completed' ? 'pending' : 'completed' }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status: 'deleted' } : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'incomplete') return todo.status === 'pending';
    return todo.status !== 'deleted';
  });

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">World Cup 2026 To-Do List</h2>
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>Filters</h5>
            <div className="btn-group d-flex flex-column" role="group" aria-label="Task filters">
              <button
                type="button"
                className={`btn btn-outline-primary mb-2 w-100 ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
                style={{ whiteSpace: 'nowrap' }}
              >
                All
              </button>
              <button
                type="button"
                className={`btn btn-outline-success mb-2 w-100 ${filter === 'completed' ? 'active' : ''}`}
                onClick={() => setFilter('completed')}
                style={{ whiteSpace: 'nowrap' }}
              >
                Completed
              </button>
              <button
                type="button"
                className={`btn btn-outline-warning mb-2 w-100 ${filter === 'incomplete' ? 'active' : ''}`}
                onClick={() => setFilter('incomplete')}
                style={{ whiteSpace: 'nowrap' }}
              >
                Incomplete
              </button>
            </div>
            <form onSubmit={handleAddTodo} className="mt-3">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add new task..."
                className="form-control mb-2"
              />
              <button type="submit" className="btn btn-success w-100">
                Add Task
              </button>
            </form>
          </div>
        </div>

        {/* Main content: Task list */}
        <div className="col-md-8">
          {filteredTodos.length === 0 ? (
            <p className="text-center">No tasks to display.</p>
          ) : (
            <ul className="list-group">
              {filteredTodos.map((todo, index) => (
                <li
                  key={todo.id}
                  className={`list-group-item d-flex justify-content-between align-items-center ${
                    todo.status === 'completed' ? 'completed-task' : ''
                  }`}
                >
                  <span
                    style={{
                      textDecoration: todo.status === 'completed' ? 'line-through' : 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => toggleComplete(todo.id)}
                    title="Toggle complete"
                  >
                    {index + 1}. {todo.text}
                  </span>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                    title="Delete task"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todos;
