import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/APropos">À propos</Link>
          <Link to="/Competence">Compétences</Link>
          <Link to="/Project">Projets</Link>
          <a
            href="https://github.com/Geoffroy-MARTIN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="icon" />
          </a>

            <a
            href="https://www.linkedin.com/in/geoffroy-martin-042309241"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="icon" />
          </a>
        </div>
      </nav>

    </header>
  );
}

export default Header;
