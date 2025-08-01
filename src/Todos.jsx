import { useState } from 'react';

function Todos() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask.trim(), completed: false }]);
    setNewTask('');
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div>
      <h2>Todo List</h2>
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="btn btn-primary" onClick={handleAddTask}>Add</button>
      </div>
      <div className="btn-group mb-3">
        <button className="btn btn-outline-secondary" onClick={() => setFilter('all')}>All</button>
        <button className="btn btn-outline-success" onClick={() => setFilter('completed')}>Completed</button>
        <button className="btn btn-outline-warning" onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <ul className="list-group">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <div>
              <button className="btn btn-sm btn-success me-2" onClick={() => toggleTask(index)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
