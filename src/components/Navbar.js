import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(true);
  const isMobile = window.innerWidth < 800;

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  console.log("Condicion", (isMobile && openLinks) || !isMobile);
  console.log(isMobile && openLinks);
  console.log(!isMobile);
  return (
    <div className="navbar">
      <div className="leftSide">
        {((isMobile && !openLinks) || !isMobile) && <img src={Logo} />}
        {((isMobile && openLinks) || !isMobile) && (
          <div className="links">
            <Link to="/"> Inicio </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/nosotros"> Nosotros </Link>
            <Link to="/contacto"> Contacto </Link>
          </div>
        )}
      </div>
      {isMobile && (
        <div
          onClick={toggleNavbar}
          style={{ color: openLinks ? "red" : "white", cursor: "pointer" }}
        >
          {openLinks ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      )}
    </div>
  );
}

export default Navbar;
