import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       <a target="_blank" href="https://www.instagram.com/sonampumkin/" ><InstagramIcon /></a> 
       <a target="_blank" href="https://www.linkedin.com/in/sonam-tsering/"><LinkedInIcon /></a> 
       <a target="_blank" href=""><TwitterIcon /></a> 
      </div>
    </div>
  );
}

export default Footer;