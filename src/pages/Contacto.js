import React from "react";
import FoodContacto from "../assets/contacto.jpg";
import "../styles/Contacto.css";

function Contacto() {
  return (
    <div className="contacto">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${FoodContacto})` }}
      ></div>
      <div className="rightSide">
        <h1> Contactenos</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nombre</label>
          <input name="name" placeholder="Escribe su nombre completo..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Escribe su dirección de correo Electronico..." type="email" />
          <label htmlFor="message">Mensaje</label>
          <textarea
            rows="6"
            placeholder="Escribe su mensaje..."
            name="mensaje"
            required
          ></textarea>
          <button type="submit"> Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
