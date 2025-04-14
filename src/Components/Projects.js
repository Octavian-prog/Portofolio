import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Projects.css";
// 
const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project-card">
          <h2>Counter</h2>
          <p>A simple counter application to increment, decrement, and reset values.</p>
          <Link to="/counter" className="btn">View Counter</Link>
        </div>
        <div className="project-card">
          <h2>Calculator</h2>
          <p>A basic calculator for performing arithmetic operations.</p>
          <Link to="/calculator" className="btn">View Calculator</Link>
        </div>
        <div className="project-card">
          <h2>To-Do List</h2>
          <p>An application to manage your tasks efficiently.</p>
          <Link to="/todo" className="btn">View To-Do List</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;