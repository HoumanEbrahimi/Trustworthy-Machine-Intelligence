import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './Navbar.css';
import React, { Component }  from 'react';

const CarAppNavBar =() => {
    return(    
      <Navbar bg="primary" style={{backgroundColor:"#e3f2fd"}} expand="lg">
      <Container>
      <a class="navBrand" href="#"><img 
              src=
"https://ethical-principles-in-ai.github.io/static/media/epai_logo.e502dc0cef3c434c1abf.png" 
              alt="" width="65" 
              height="65"/> UofT TMI </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="Navbar">
            <Link to="/" className="navLink">    Home   </Link>
            <Link to="/mainPage" className="navLink">   Team   </Link>
            <Link to="/team" className="navLink">  Events </Link>
            <Link to="/team" className="navLink">  Projects </Link>
            <Link to="/team" className="navLink">  Newsletter </Link>
            <Link to="/team" className="navLink">  Oppurtunities </Link>
            <Link to="/team" className="navLink">  Contact Us  </Link>
            


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
    

}
export default CarAppNavBar;

<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
<Link className="navbar-brand" to="/" style={{fontSize:"30px",fontFamily:"Tahoma", marginRight:"90px"}}>
&nbsp;&nbsp;
  <img
    src="https://media.discordapp.net/attachments/1110694536579121273/1138870000296394783/TMI.png?width=574&height=574"
    alt=""
    width="65"
    height="65"
  />
  &nbsp;&nbsp;
  UofT TMI
</Link>
<button
  className="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarText"
  aria-controls="navbarText"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarText">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <Link className="nav-link" to="/" style={{fontSize:"30px",fontFamily:"Tahoma" , color:"white" , marginRight:"90px"}}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Home
      </Link>
    </li>
    <li className="nav-item" >
      <Link className="nav-link" to="/team" style={{fontSize:"30px",fontFamily:"Tahoma" ,  color:"white" , marginRight:"90px"}}>
        Team
      </Link>
    </li>
    
    <li className="nav-item">
      <Link className="nav-link" to="/events" style={{fontSize:"30px",fontFamily:"Tahoma" , color:"white" , marginRight:"90px"}}>
        Events
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/projects" style={{fontSize:"30px",fontFamily:"Tahoma" , color:"white" , marginRight:"90px"}}>
        Projects
      </Link>
    </li>            <li className="nav-item">
      <Link className="nav-link" to="/newsletter" style={{fontSize:"30px",fontFamily:"Tahoma" , color:"white" , marginRight:"90px"}}>
        Newsletter
      </Link>
    </li>            <li className="nav-item">
      <Link className="nav-link" to="/opportunities" style={{fontSize:"30px",fontFamily:"Tahoma" , color:"white" , marginRight:"90px"}}>
      Opportunities
      </Link>
    </li>            <li className="nav-item">
      <Link className="nav-link" to="/contact" style={{fontSize:"30px",fontFamily:"Tahoma" , color:"white" , marginRight:"90px"}}>
        Contact us
      </Link>
    </li>
  </ul>
</div>
</nav>
