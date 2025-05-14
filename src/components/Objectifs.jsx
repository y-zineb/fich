import React from "react";
import "../App.css";

function Objectifs(props) {
  return (
    <li>
      <img src={props.image} alt={`image de ${props.nom}`} width="20" />
      <input type={"checkbox"} id={props.id} />
      <label htmlFor={props.id}>{props.nom} </label>
    </li>
  );
}
export default Objectifs;
