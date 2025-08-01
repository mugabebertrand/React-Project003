import React, { useState } from 'react';


function Todos() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Build stadiums in host cities', completed: false },
    { id: 2, text: 'Finalize team qualifications', completed: true },
    { id: 3, text: 'Assign referees for each match', completed: false },
    { id: 4, text: 'Prepare opening ceremony', completed: false },
    { id: 5, text: 'Train volunteers and staff', completed: false },
    { id: 6, text: 'Secure transportation plans', completed: true },
    { id: 7, text: 'Launch ticket sales platform', completed: false },
    { id: 8, text: 'Confirm team accommodations', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h2 className="text-center mb-4">World Cup 2026 To-Do List</h2>

      <form onSubmit={handleAddTodo} className="mb-3 d-flex gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task..."
          className="form-control"
        />
        <button className="btn btn-success" type="submit">Add</button>
      </form>

      
      <div className="btn-group mb-3">
        <button className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
        <button className={`btn btn-outline-success ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
        <button className={`btn btn-outline-warning ${filter === 'incomplete' ? 'active' : ''}`} onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      <ul className="list-group">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              todo.completed ? 'completed-task' : ''
            }`}
          >
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
