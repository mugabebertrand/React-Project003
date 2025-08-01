import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Todos from './Todos';
import DeletedTask from './DeletedTask'
import PendingTask from './PendingTask'
import ContactUs from './ContactUs';

const initialTodos = [
  { id: 1, text: "Research stadium locations in USA, Canada, Mexico", status: "pending" },
  { id: 2, text: "Create match schedule and fixtures", status: "completed" },
  { id: 3, text: "Design ticket booking UI mockup", status: "pending" },
  { id: 4, text: "Build country team profiles with flags and players", status: "pending" },
  { id: 5, text: "Add group stage sorting functionality", status: "pending" },
  { id: 6, text: "Implement live score update feature", status: "pending" },
  { id: 7, text: "Create fan zone page with music and facts", status: "completed" },
  { id: 8, text: "Plan launch promotion and social media strategy", status: "deleted" }
];

function App() {
  const [todos, setTodos] = useState(initialTodos)

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

export default App
