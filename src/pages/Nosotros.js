import React from "react";
import FoodNosotros from "../assets/nosotros.jpg";
import "../styles/Nosotros.css";
function Nosotros() {
  return (
    <div className="nosotros">
      <div
        className="nosotrosTop"
        style={{ backgroundImage: `url(${FoodNosotros})` }}
      ></div>
      <div className="nosotrosBottom">
        <h1> ACERCA DE NOSOTROS</h1>
        <p>
        Sanissimo Brunch nace por la creciente preferencia mundial de conservar 
        una vida sana con base al consumo de alimentos nutritivos y saludables; 
        en relación a ello, hemos planteado un modelo de Restaurante que sea una solución 
        para generar bienestar, a través de una alimentación saludable.
        </p>
        <p>Tener como aliado a Sanissimo Brunch es mantenerte saludable, comiendo sano 
          y rico sin la necesidad de preocuparte cada día en cómo elaborar tus comidas
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
