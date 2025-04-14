import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa"; // Import icons
import "../Styles/About.css";
// 
const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        I am a developer passionate about modern technologies, and I enjoy creating efficient and attractive web applications.
      </p>
      <h2>Technologies I know:</h2>
      <div className="technologies">
        <div className="tech-card">
          <FaReact size={50} color="#61DBFB" />
          <p>React</p>
        </div>
        <div className="tech-card">
          <FaNodeJs size={50} color="#68A063" />
          <p>Node.js</p>
        </div>
        <div className="tech-card">
          <FaHtml5 size={50} color="#E34C26" />
          <p>HTML5</p>
        </div>
        <div className="tech-card">
          <FaCss3Alt size={50} color="#1572B6" />
          <p>CSS3</p>
        </div>
        <div className="tech-card">
          <FaJsSquare size={50} color="#F7DF1E" />
          <p>JavaScript</p>
        </div>
        <div className="tech-card">
          <FaGitAlt size={50} color="#F05032" />
          <p>Git</p>
        </div>
      </div>
    </div>
  );
};

export default About;