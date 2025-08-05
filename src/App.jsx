import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Todos from './Todos';
import DeletedTask from './DeletedTask';
import PendingTask from './PendingTask';
import ContactUs from './ContactUs';
import './style.css';

const initialTodos = [
  { id: 1, text: 'Build stadiums in host cities', status: 'pending' },
  { id: 2, text: 'Finalize team qualifications', status: 'completed' },
  { id: 3, text: 'Assign referees for each match', status: 'pending' },
  { id: 4, text: 'Prepare opening ceremony', status: 'pending' },
  { id: 5, text: 'Train volunteers and staff', status: 'pending' },
  { id: 6, text: 'Secure transportation plans', status: 'completed' },
  { id: 7, text: 'Launch ticket sales platform', status: 'pending' },
  { id: 8, text: 'Confirm team accommodations', status: 'pending' },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Todos todos={todos} setTodos={setTodos} />} />
          <Route path="/pending-task" element={<PendingTask todos={todos} setTodos={setTodos} />} />
          <Route path="/deleted-task" element={<DeletedTask todos={todos} setTodos={setTodos} />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;