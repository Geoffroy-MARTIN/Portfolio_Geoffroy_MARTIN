import React from "react";
import "./Projects.css";
import image_pendu from "../../assets/images/pendu.png";
import image_portfolio from "../../assets/images/Portfolio.png";
import image_mafate_jobs from"../../assets/images/mafate-job.png";
export default function Project() {
  return (
    <section className="project-section">
      <p className="project-title">Projet</p>
      <div className="rectangle-rouge"></div>
      <div className="grid-rectangle">

        <div className="project-div">
          <p className="box-title">Mafate-jobs</p>
          <img src={image_mafate_jobs} alt="image_mafate_jobs" className="image_mafate_jobs"/>
          <a href="https://github.com/LAVITGaetan/mafate-jobs">Git</a>
        </div>

        <div className="project-div">
          <p className="box-title">Portfolio</p>
         <img src={image_portfolio} alt="image_porfolio" className="image_portfolio"/>
          <a href="">Git</a>
        </div >

        <div className="project-div">
          <p className="box-title">Jeu du pendu</p>
          <img src={image_pendu} alt="jeu-du-pendu" className="image_pendu"/>
          <a href="https://github.com/Geoffroy-MARTIN/Pendu_game">Git</a>
        </div>
      </div>
    </section>
  );
}

