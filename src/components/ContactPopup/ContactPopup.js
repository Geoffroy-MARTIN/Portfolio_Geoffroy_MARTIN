import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPopup.css";

export default function ContactPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    numero: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send("service_swr98d9", "template_kevpkq7", formData, "a3PcNAw1-5S_dZHxo")


      .then(() => {
        alert("Message envoyé !");
        onClose();
      })
      .catch((error) => {
  console.error("Erreur EmailJS :", error);
  alert("Erreur lors de l'envoi");
});
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Me contacter</h2>
        <form onSubmit={sendEmail}>
          <input type="text" name="nom" placeholder="Nom" onChange={handleChange} required />
          <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} required />
          <input type="text" name="numero" placeholder="Numéro" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Message" onChange={handleChange} required />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
