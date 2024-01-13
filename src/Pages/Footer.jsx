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
        <a href="https://www.instagram.com/uoft_epai/" >
          <FontAwesomeIcon className="icons-change" icon={faInstagram} size="3x" transform="left-24" target="_blank"
color='orange'/>
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp; 

        <a href="https://discord.com/channels/1110690752658415668/1110694536579121273" target="_blank"
>
          <FontAwesomeIcon className="icons-change" icon={faDiscord} size="3x" transform="left-14" color='orange'/>
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp; 
        <a href="https://discord.com/channels/1110690752658415668/1110694536579121273" >
          <FontAwesomeIcon className="icons-change" icon={faEnvelope} size="3x" transform="left-4" color='orange'  target="_blank"
/>
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
