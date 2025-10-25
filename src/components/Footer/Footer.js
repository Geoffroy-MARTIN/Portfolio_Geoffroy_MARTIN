import React, { useState } from "react";
import ContactPopup from "../ContactPopup/ContactPopup";
import "./Footer.css";

export default function Footer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <footer className="footer">
      <button onClick={() => setIsPopupOpen(true)}>Me contacter</button>
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </footer>
  );
}
