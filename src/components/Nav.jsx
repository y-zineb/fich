import React, { useState } from "react";
import "../styles/Nav.css";
import Logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

function Nav() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="logo-container" id={openLinks ? "open" : "close"}>
        {/* <Link to="/Accueil"></Link> */}
        <img
          src={Logo}
          alt="DO1 logo featuring Link stylized design, representing the organization, placed prominently in the navigation bar"
        />
        <div className="hiddenLinks">
          {/* <Link to="/Accueil">Accueil</Link>
          <Link to="/À propos">À propos</Link>
          <Link to="/Gallerie">Galerie</Link>
          <Link to="/Activities">Activités</Link>
          <Link to="/Projets">Projets</Link>
          <Link to="/Membres">Membres</Link>
          <Link to="/Contact">Contact</Link> */}
        </div>
      </div>
      <div className="nav-links">
        {/* <Link to="/Accueil">Accueil</Link>
        <Link to="/À propos">À propos</Link>
        <Link to="/Galerie">Galerie</Link>
        <Link to="/Activités">Activités</Link>
        <Link to="/Projets">Projets</Link>
        <Link to="/Membres">Membres</Link>
        <Link to="/Contact">Contact</Link> */}
        <button className="toggle-button" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Nav;
