import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"; // Import icons
import "../Styles/Home.css";
import profilImage from "../Image/profil.jpg"; // Corrected path to the image

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome!</h1>
          <p>
            I am [Your Name], a developer passionate about creating modern and efficient web applications.
          </p>
          <Link to="/projects" className="btn">
            View My Projects
          </Link>
        </div>
        <img
          src={profilImage} // Use the imported image
          alt="My Profile"
          className="profile-img"
        />
      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>Contact</h3>
        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
            <FaWhatsapp size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;