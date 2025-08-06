import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid px-0">
        <div className="d-flex w-100">
          <Link className="nav-link text-center flex-fill text-white fw-bold" to="/">
            Todos
          </Link>
          <Link className="nav-link text-center flex-fill text-white fw-bold" to="/pending-task">
            Pending Tasks
          </Link>
          <Link className="nav-link text-center flex-fill text-white fw-bold" to="/deleted-task">
            Deleted Tasks
          </Link>
          <Link className="nav-link text-center flex-fill text-white fw-bold" to="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
