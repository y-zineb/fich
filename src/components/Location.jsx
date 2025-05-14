import React from "react";

const Location = () => {
  return (
    <div className="location">
      <h2>Notre localisation</h2>
      <iframe
        width="425"
        height="350"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-7.542269825935365%2C33.56515567993443%2C-7.5392764806747445%2C33.566465363083694&amp;layer=mapnik"
        style={{ border: "1px solid black" }}
        title="OpenStreetMap"
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
          rel="noopener noreferrer"
        >
          Voir sur OpenStreetMap
        </a>
      </p>
    </div>
  );
};

export default Location;
