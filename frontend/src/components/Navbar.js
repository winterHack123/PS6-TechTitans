import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-bar">
        <div className="nav-logo">
          <Link to="/" >
           Mock-Up
          </Link>
        </div>
        <ul className="nav-links">
          <li className="link">
            <Link to="/register">Register</Link>
          </li>
          <li className="link">
            <Link to="/login">Match on Login</Link>
          </li>
          <li className="link">
            <Link to="/interview-questions">Interview Questions</Link>
          </li>
          <li className="link">
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

