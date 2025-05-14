import React from "react";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Facebook from "@mui/icons-material/Facebook";
import Mail from "@mui/icons-material/Mail";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        &copy; 2024 DO1 - <span class="highlight">We do it as one</span>
      </p>
      <div className="social-icons">
        <Instagram />
        <LinkedIn />
        <Facebook />
        <Mail />

        <a href="mailto:contact@do1club.com" title="Email">
          <img src="../images/mail.jpg" alt="Email" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
