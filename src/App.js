import logo from './logo.svg';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import './App.css';
//import "./components/Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/js/src/collapse.js";
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
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
&nbsp;&nbsp;
  <a class="navbar-brand" href="/">   
  <img
    src="https://media.discordapp.net/attachments/1110694536579121273/1138870000296394783/TMI.png?width=574&height=574"
    alt=""
    width="65"
    height="65"
  /></a>

  <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/team" >Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/events" >Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/projects" >Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/newsletter"  >Newsletter</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/opportunities" >Opportunities</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/opportunities' element={<Opportunities/>} />
        <Route path='/newsletter' element={<Newsletter />} />

      </Routes>
    </div> 

    //<BrowserRouter>

 // </BrowserRouter>
  );
}

export default App;
