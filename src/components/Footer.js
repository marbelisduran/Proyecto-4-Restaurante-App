import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <FacebookIcon /> <WhatsAppIcon />
      </div>
      <p> &copy; 2022 sanissimobrunch.com</p>
    </div>
  );
}

export default Footer;
