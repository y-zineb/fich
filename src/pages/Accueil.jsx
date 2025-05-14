import React from "react";
import "../App.css";
import "../styles/Accueil.css";
import BannerImage from "../assets/home.png";

function Accueil() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>
          Bienvenue chez <span className="highlight">DO1</span>
        </h1>
        <p>
          Un espace collaboratif pour innover, apprendre, et créer dans le
          domaine du <strong>génie logiciel</strong>.
        </p>
        {/* <Link to="/À propos"> */}
          <button> Découvrir plus </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Accueil;
