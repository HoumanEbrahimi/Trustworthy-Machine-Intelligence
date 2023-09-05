import logo from './logo.svg';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import './App.css';
import "./components/Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Main from './Pages/mainPage.jsx';
import Team from './Pages/team.jsx'; // Assuming this is where your /team route is defined
import Layout from './Pages/Layout.js';
import Projects from './Pages/projects.jsx';
import Contact from './Pages/contact.jsx'
import Events from './Pages/events.jsx';
import Opportunities from './Pages/opportunities.jsx'
import Newsletter from './Pages/newsletter.jsx'


function App() {
  return (
    <div className="App">
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
            {/* Other navigation links */}
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
      {/* Define your routes using the <Routes> component */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/opportunities' element={<Opportunities/>} />
        <Route path='/newsletter' element={<Newsletter />} />

        {/* Other routes */}
      </Routes>
    </div>
  );
}

export default App;
