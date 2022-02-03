import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Inicio </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/nosotros"> Nosotros </Link>
          <Link to="/contacto"> Contacto </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Inicio </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/nosotros"> Nosotros </Link>
        <Link to="/contacto"> Contacto </Link>
        <button onClick={toggleNavbar}>
          algo
        </button>
      </div>
    </div>
  );
}

export default Navbar;
