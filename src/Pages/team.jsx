import React, { useState } from 'react';
import './team.css';
import Footer from './Layout.js';
import users from '../Data/users.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth,faLin} from '@fortawesome/free-solid-svg-icons';
import Popup from './popup.jsx';

const Team = () => {
  const [flipStates, setFlipStates] = useState([false, false, false,false,false,false,false,false]);
  const [buttonPopup,setButtonPopup] = useState(false)
  const toggleCard = (index) => {
    const newFlipStates = [...flipStates];
    newFlipStates[index] = !newFlipStates[index];
    setFlipStates(newFlipStates);
  };

  return (
    <div >
      <br></br>
      <div className="small-container2" style={{backgroundColor:"#18151f"}}>
        <br></br>
      <div className="font-1">Who we are</div>
      <div className="font-inline-main"> We are a group of motivated students aiming to spread awareness about the impacts of AI  on our society.Through TMI, we hope to create an open environment to foster critical discussions about the consequences of the use of AI.</div>
      </div>
      <div className="background">
        
        <div className=" card-container2">
          
          {flipStates.map((isFlipped, index) => (
            <div className={`flip-card ${flipStates[index] ? 'flipped' : ''}`} key={index}>
              <div className="cards flip-card-inner" style={{width:"33rem", height:"43rem"}} >
                <div className=" card flip-card-front " style={{backgroundColor:"#18151f"}}>
                  <img className="card-img" style={{objectFit:"cover"}} src={users[index].imagePath} 
                  width="70"
                  height="470" 
                  alt=""/>
                  <div className="card-body">
                  <h5 className="card-title" style={{color:"white",fontFamily:"Times New Roman",fontSize:"25px"}}>{users[index].name}</h5>
                  <p className="card-text" style={{fontFamily:"Times New Roman", fontSize:"20px",color:"orange"}} >{users[index].position}</p>
                  <FontAwesomeIcon  icon={faEarth} size="3x"  color='#2596be'/>
                  <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />                 
                   </div>
                  {/* <button class="btn btn-primary inline-buttons" onClick={() => toggsleCard(index)}>More Info</button> */}

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
      <button class="mt-auto btn btn-primary" onClick={()=>setButtonPopup(true)} style={{backgroundColor:'#2596be',fontFamily:"Times New Roman"}}>Previous Board Members</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 style={{color:"black",fontFamily:"Times New Roman"}}>2021/2022 Board members</h3>
        <br></br>
        <p style={{color:"black"}}>President: Jasmine Zhang</p>
        <p style={{color:"black"}}>VP Administration: Emily Traynor</p>
        <p style={{color:"black"}}>VP Operations (Workshop): sarina Xi</p>
        <p style={{color:"black"}}>VP Operations (Project): Dhruv Sirohi</p>
        <p style={{color:"black"}}>Differential Privacy Lead: Nicole Streltsov</p>
        <p style={{color:"black"}}>Differential Privacy Lead: Tamim Hasan</p>
        <p style={{color:"black"}}>VP Marketing: Anya Pedersen</p>
        <p style={{color:"black"}}>VP Media: JongJin Jung</p>
        <p style={{color:"black"}}>Web Developer: Chase McDougall</p>


      </Popup>
          <br></br><br></br>
      <Footer />
    </div>

    

  );
};

export default Team;
