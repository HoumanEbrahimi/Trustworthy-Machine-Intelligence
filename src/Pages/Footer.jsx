// Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
<footer class="footer-distributed">

<div class="footer-left">

  <h3>      <img
            src="https://media.discordapp.net/attachments/1110694536579121273/1138870000296394783/TMI.png?width=574&height=574"
            alt=""
            width="100"
            height="100"
          /></h3>

  <p class="footer-links">
    <a href="#" class="link-1">Home</a>
    
    
    <a href="#">Team</a>
    
    
    <a href="#">Contact</a>
  </p>

</div>

<div class="footer-center">


    <p> Join our mailing list</p>

  <div>
  <FontAwesomeIcon icon={faEnvelope} size="3x" transform="left-10 down-3" color='orange'/>
          <p><a href="utoronto.tmi@gmail.com">utoronto.tmi@gmail.com</a></p>
        </div>


</div>

<div class="footer-right">


  <div class="footer-icons">
    <p> Join our team</p>
    <a href="#">  <FontAwesomeIcon icon={faDiscord} size="2x" transform="left-10 down-3" color='orange'/>
</a>
    <a href="#">  <FontAwesomeIcon icon={faInstagram} size="2x" transform="left-10 down-3" color='orange'/>
</a>
    <a href="#">  <FontAwesomeIcon icon={faEnvelope} size="2x" transform="left-10 down-3" color='orange'/>
</a>

  </div>

</div>

</footer>
  );
};

export default Footer;
