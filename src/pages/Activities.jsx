import React from "react";
import { Activitygrid } from "../helpers/Activitygrid";
import Activitycard from "../components/Activitycard";
import { Projectgrid } from "../helpers/Projectgrid";
import Projectcard from "../components/Projectcard";
import "../styles/Activities.css";

function Activities() {
  return (
    <div className="Mission">
      <div className="Activities">
        <h2 className="Title">Nos Activités</h2>
        <div className="Activitygrid">
          {Activitygrid.map((a, index) => {
            return (
              <Activitycard
                image={a.image}
                name={a.name}
                description={a.description}
              />
            );
          })}
        </div>
      </div>
      <div className="Projects">
        <h2 className="Title">Nos Projets</h2>
        <div className="Projectgrid">
          {Projectgrid.map((p, index) => {
            return (
              <Projectcard
                image={p.image}
                name={p.name}
                description={p.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Activities;
