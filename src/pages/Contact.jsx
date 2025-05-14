import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="container">
        <h2 className="Title">Contactez-nous</h2>
        <form id="Contact-form" method="Envoyer">
          <label htmlfor="name">Nom Complet</label>
          <input type="text" name="name" placeholder="Votre nom" required />

          <label htmlfor="email">Email</label>
          <input type="email" name="email" placeholder="Votre email" required />

          <label htmlfor="message">Message</label>
          <textarea
            row="6"
            name="message"
            placeholder="Votre message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Envoyer
          </button>
        </form>
      </div>

      <div class="location">
        <h2>Notre localisation</h2>
        <iframe
          width="425"
          height="350"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-7.542269825935365%2C33.56515567993443%2C-7.5392764806747445%2C33.566465363083694&amp;layer=mapnik"
        style={{borderColor: 'black', borderWidth: 1, }}
        ></iframe>
        <br />
        <small>
          <a href="https://www.openstreetmap.org/#map=19/33.565811/-7.540773">
            Afficher une carte plus grande
          </a>
        </small>
        <p>
          <a
            href="https://www.openstreetmap.org/directions?from=&to=33.565994%2C-7.541052#map=19/33.565918/-7.541269"
            target="_blank"
          >
            Voir sur OpenStreetMap
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
