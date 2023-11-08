import React, { useState } from 'react';
import Footer from './Layout.js';
import './events.css';
import events from '../Data/pastevents.json';
import events2 from '../Data/newevents.json';


const Events = () =>{

    return(
        <div >
        
            <div style={{backgroundColor:"#18151f"}} className="small-container">
                <h1 className="font-events"> Events </h1>
                <h2 className="font2-events"> 

We live in an age of rapid technological development which has presented us with many benefits but also consequences. To help us better understand the ethical concerns that have arisen recently in the emerging fields of artificial intelligence, TMI is holding monthly workshops that come in various formats. They can be a talk or presentation from a guest speaker, an introduction to visualize ethical concerns with actual code and models, or opportunities to exchange and express ideas in the format of a debate.
Stay tuned to our website and other social media accounts for updates!</h2>
<br></br>
            </div>
            <div>
                
            </div>
            <div >
            <br></br><br></br>
            <hr style={{color:"black"}} />
            <h1 className="font3"  > Projects </h1>
            <hr style={{color:"black"}} />

            <br></br><br></br>
            <div className="card-container ">
            {events2.map((event, index) => (

            <div class="card " style={{width: "45rem", height:"40rem"}}>
                <img class="card-img-top" src={event.imagePath} alt={event.name} style={{width:"717.6px",height:"403.63px",objectFit:"cover"}}/>
                <div class="card-body card-footer">
                <br></br>

                    <h3 class="card-title"  style={{fontFamily:"50px",color:"black"}}>{event.name}</h3>
                    <br></br>
                     <a href={event.website} type="button" class="btn btn-primary btn-sm float-right" style={{fontFamily:"Times New Roman",backgroundColor:"#2596be"}}>Learn More</a>
                 </div>
                 
            </div>
            
            ))}
            </div>
            
            </div>


        <Footer/>
        </div>

    )


}


export default Events;
