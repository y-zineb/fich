import React, { useState } from "react";
import "../styles/Contact.css";
import Location from "../components/Location";

function Contact() {
  return (
    <section id="Contact">
      <div className="container">
        <h2 className="Title">Contactez-nous</h2>
        <form id="Contact-form" method="post">
          <label htmlFor="name">Nom Complet</label>
          <input type="text" name="name" placeholder="Votre nom" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Votre email" required />

          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Votre message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Envoyer
          </button>
        </form>
      </div>

      <Location />
    </section>
  );
}

export default Contact;
