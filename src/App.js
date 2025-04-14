import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Counter from "./Components/Counter";
import Calculator from "./Components/Calculator";
import ToDoApp from "./Components/ToDoApp";
import Home from "./Components/Home";
import Projects from "./Components/Projects"; // Import the Projects component
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portofolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<ToDoApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
