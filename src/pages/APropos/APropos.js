import React from "react";
import "./APropos.css";
export default function APropos() {
  return (
    <section className="apropos-section">
      <p className="apropos-title">A propos</p>
      <div className="apropos-grid">
        <div className="box">
          <p className="title-box">Qui suis-je ?</p>
          <p className="text">
            Après un BTS Systèmes Numériques option Électronique et Communication, j’ai poursuivi en prépa ATS afin d’approfondir mes bases scientifiques et techniques.
            Mon parcours m’a ensuite conduit vers Epitech, où j’ai découvert toute la richesse du développement web et logiciel, un domaine qui me permet d’allier créativité, logique et optimisation.
          </p>
        </div>
        <div className="box">
          <p className="title-box">Mes valeurs</p>
          <ul className="text">
            <li>Curiosité : apprendre, explorer, tester sans cesse.</li>
            <li>Méthode : avancer avec rigueur et clarté.</li>
            <li>Passion : concevoir des solutions élégantes et efficaces.</li>
            <li>Optimisation : aller toujours plus loin dans la performance et l’expérience utilisateur.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
