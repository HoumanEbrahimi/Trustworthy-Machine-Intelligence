import React, { useState } from 'react';
import './team.css';
import Footer from './Layout.js';
import users from '../Data/users.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth,faCircleInfo} from '@fortawesome/free-solid-svg-icons';
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
                  <img className="card-img-top" src={users[index].imagePath} 
                  width="200"
                  height="500" 
                  alt=""/>
                  <div className="card-body">
                  <h5 className="card-title" style={{color:"white",fontFamily:"Times New Roman",fontSize:"25px"}}>{users[index].name}</h5>
                  <p className="card-text" style={{fontFamily:"Times New Roman", fontSize:"20px",color:"orange"}} >{users[index].position}</p>
                  <FontAwesomeIcon  icon={faEarth} size="3x"  color='#2596be'/>

                  </div>
                  <div onClick={() => toggleCard(index)}>
                  <FontAwesomeIcon  icon={faCircleInfo} size="2x"  transform="up-10 right-85" color='#2596be' />

                  </div>

                  {/* <button class="btn btn-primary inline-buttons" onClick={() => toggleCard(index)}>More Info</button> */}

                </div>
                <div className="flip-card-back" style={{width:"33rem", height:"43rem",backgroundColor:"#18151f"}}>
                  <p className="font-inline-main2" style={{color:"white"}}>{users[index].bio}</p>
                  <div onClick={() => toggleCard(index)}>
                  <FontAwesomeIcon  icon={faCircleInfo} size="2x"  transform="left-17 down-150" color='#2596be' />

                  </div>
                  {/* <button  class="btn btn-primary inline-buttons" onClick={() => toggleCard(index)}>Back</button> */}

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
      <button class="mt-auto btn btn-primary" onClick={()=>setButtonPopup(true)} style={{backgroundColor:'#2596be'}}>Previous Board Members</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 style={{color:"black"}}>2021/2022 Board members</h3>
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
