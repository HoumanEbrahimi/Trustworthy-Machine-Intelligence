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

