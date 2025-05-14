import React, { useState } from "react";
import "../styles/Nav.css";
import Logo from "../assets/logo.png";
import ReorderIcon from "@mui/icons-material/Reorder";

function Nav() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="logo-container" id={openLinks ? "open" : "close"}>
        <a href="#Accueil"></a>
        <img
          src={Logo}
          alt="DO1 logo featuring a stylized design, representing the organization, placed prominently in the navigation bar"
        />
        <div className="hiddenLinks">
          <a href="#Accueil">Accueil</a>
          <a href="#À propos">À propos</a>
          <a href="#Gallerie">Galerie</a>
          <a href="#Activities">Activités</a>
          <a href="#Projets">Projets</a>
          <a href="#Membres">Membres</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
      <div className="nav-Links">
        <a href="#Accueil">Accueil</a>
        <a href="#À propos">À propos</a>
        <a href="#Galerie">Galerie</a>
        <a href="#Activités">Activités</a>
        <a href="#Projets">Projets</a>
        <a href="#Contact">Contact</a>
        <button className="toggle-button" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Nav;
