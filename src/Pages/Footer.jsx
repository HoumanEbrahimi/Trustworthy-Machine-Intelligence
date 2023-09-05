// Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="alignment"> 
      <h1 className="footer-align" style={{fontFamily:"Tahoma",fontSize:"30px"}}>Contact Us</h1>
      <div className="footer-content">
        <a href="https://www.instagram.com/uoft_epai/" className="insta-link">
          <FontAwesomeIcon icon={faInstagram} size="3x" transform="left-36" color='orange'/>
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp; 

        <a href="https://discord.com/channels/1110690752658415668/1110694536579121273" className="insta-link">
          <FontAwesomeIcon  icon={faDiscord} size="3x" transform="left-26" color='orange'/>
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp; 
        <a href="https://discord.com/channels/1110690752658415668/1110694536579121273" className="insta-link">
          <FontAwesomeIcon icon={faEnvelope} size="3x" transform="left-16" color='orange'/>
        </a>

      </div>
      <img
            src="https://media.discordapp.net/attachments/1110694536579121273/1138870000296394783/TMI.png?width=574&height=574"
            alt=""
            width="65"
            height="65"
          />
      </div>

    </footer>
  );
};

export default Footer;
