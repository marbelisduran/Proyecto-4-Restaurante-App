import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/food.jpeg";
import "../styles/Inicio.css";

function Inicio() {
  return (
    <div className="inicio" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}> SANISSIMO BRUNCH </h1>
        <p>Fresh and Healthy</p>
        <Link to="/contacto">
          <button> RESERVE AHORA </button>
        </Link>
      </div>
    </div>
  );
}

export default Inicio;
