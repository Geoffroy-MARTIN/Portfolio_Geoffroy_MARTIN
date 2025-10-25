import React from "react";
import "./competences.css";
import image1 from "../../assets/icons/react-logo.png";
import image2 from "../../assets/icons/html-logo.png";
import image3 from "../../assets/icons/css-logo.png";
import image4 from "../../assets/icons/javascript-logo.png";
export default function Competence() {
  return (
    <section className="competences-section ">
      <p className="competences-title">Compétences</p>
        <div className="carre-rouge"></div>
      <div className="text">
        <p>Voici les compétences que j’ai développées au fil du temps.
          </p>
      </div>

      <div className="main-grid">
        <div className="competence-box">
          <img src={image1} alt="logo_react" className="react-image" />

        </div>
        <div className="competence-box">
          <img src={image2} alt="logo_html" className="html-image" />
        </div>

        <div className="competence-box">
          <img src={image3} alt="logo_css" className="css-image" />
        </div>

        <div className="competence-box">
          <img src={image4} alt="logo_javascript" className="javascript-image"/>
        
        </div>

      </div>
    </section>
  );
}
