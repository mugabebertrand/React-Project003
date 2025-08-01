import React from 'react';

function PendingTask({ todos, setTodos }) {
  // Filter to only pending and not deleted
  const pendingTasks = todos.filter(t => t.status === 'pending');

  const toggleTaskStatus = (id) => {
    setTodos(
      todos.map(task =>
        task.id === id
          ? { ...task, status: 'completed' }
          : task
      )
    );
  };

  return (
    <div>
      <h2>Pending Tasks</h2>
      {pendingTasks.length === 0 ? (
        <p>No pending tasks</p>
      ) : (
        <ul className="list-group">
          {pendingTasks.map(task => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => toggleTaskStatus(task.id)}
                title="Mark as completed"
              >
                {task.text}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PendingTask;
