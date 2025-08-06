import React from 'react';

function DeletedTask({ todos, setTodos }) {
  const deletedTasks = todos.filter(t => t.status === 'deleted');

  const restoreTask = (id) => {
    setTodos(
      todos.map(task =>
        task.id === id ? { ...task, status: 'pending' } : task
      )
    );
  };

  return (
    <div className='container-fluid full-width-container'>
      <h2>Deleted Tasks</h2>
      {deletedTasks.length === 0 ? (
        <p>No deleted tasks</p>
      ) : (
        <ul className="list-group">
          {deletedTasks.map(task => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              {task.text}
              <button className="btn btn-sm btn-success" onClick={() => restoreTask(task.id)}>Restore</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DeletedTask;