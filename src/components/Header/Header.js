import React from "react";
import { Link } from "react-router-dom";
import "./header.css";


function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/APropos">À propos</Link>
          <Link to="/Competence">Compétences</Link>
          <Link to="/Project">Projets</Link>
        </div>
      </nav>

    </header>
  );
}

export default Header;
