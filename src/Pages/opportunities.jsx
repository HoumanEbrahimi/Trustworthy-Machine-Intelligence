import React, { useState } from 'react';
import './opportunities.css'

import Footer from './Layout.js'
const Opp = () =>{
    return(
        <div >
        
                <h1 className="font1" style={{fontSize:"70px",color:"black"}}> Opportunities </h1>
                <br></br>
                <hr style={{color:"black"}} />
            
                <h1 className="font1" style={{fontSize:"46px",color:"black"}}>Faculty Advisor and Opportunities</h1>
            
            <div >
            <div className="container py-4">

            <article className="postcard2 dark2">

                <div class="card-body"> 

                <h1 className="postcard__title " style={{color:"orange"}}>Professor Ishtiaque Ahmed</h1>
                <br/><br/>
                <img className="postcard_title" src="https://ethical-principles-in-ai.github.io/static/media/Ahmed.6924f4eefc282339ab35.jpg" alt="blank" style={{width:"250px",height:"250px"}}/>
                
                <div className="postcard__preview-txt">Syed Ishtiaque Ahmed is an Assistant Professor of Computer Science at the University of Toronto, and the Director of the ‘Third Space'' research group. 
                He is also a graduate faculty member of the School of Environment, a Faculty Fellow at the Schwartz Reisman Institute for Technology and Society, and a Senior Fellow at Massey College. 
                He co-organizes the monthly Critical Computing Seminar at UofT, and co-steer UofT's SDG initiative. Ishtiaque’s research focuses on the design challenges around strengthening the ‘voices’ or 
                marginalized communities around the world. He conducted ethnography and built technologies with many underprivileged communities in Bangladesh, India, Pakistan, Iran, Iraq, Turkey, China, Canada,
                 and the US. Ishtiaque received his PhD and Masters from Cornell University in the USA, and his Bachelor from BUET in Bangladesh. He received the International Fulbright Science and Technology 
                 Fellowship, Fulbright Centennial Fellowship, and Schwartz Reisman Institute Fellowship among others. His research has been funded by all three branches of Canadian tri-council research 
                 (NSERC, CIHR, SSHRC), NSF, NIH, Google, Microsoft, Facebook, Intel, Samsung, the World Bank, UNICEF, and UNDP, among others.</div>

                </div>
                <a href="https://www.ishtiaque.net/" class="btn btn-primary" target="_blank" style={{backgroundColor:"rgb(37,150,190)",fontFamily:"Times New Roman"}}>More about Professor Ishtiaque Ahmed</a>

            </article>
            </div>
            <hr style={{color:"black"}} />
            
            <h1 className="font1" style={{fontSize:"46px",color:"black"}}>Resources</h1>
            <hr style={{color:"black"}} size="70"/>
            <div className="card-container3">

            <div class="card" style={{width: "45rem", height:"40rem",backgroundColor:"white"}}>
                <img class="postcard__img" src="https://ethical-principles-in-ai.github.io/static/media/resource_inter.9082b393e327fe1288b8.PNG" alt="placeholder" style={{width:"717.6px",height:"403.63px"}}/>
                <div class="card-body">
                <br></br>

                    <h5 class="card-title" style={{fontFamily:"Times New Roman",fontSize:"30px",color:"black"}}>Intermediate Level</h5>
                    <br/><br/><br/>
                     <a href="" class="btn btn-primary" style={{backgroundColor:"rgb(37,150,190)",fontFamily:"Times New Roman"}} >Unsolved Problems in ML Safety</a>
                 </div>
                 
            </div>
            <div class="card" style={{width: "45rem", height:"40rem",backgroundColor:"white"}}>
                <img class="postcard__img" src="https://github.com/HoumanEbrahimi/Lol/blob/main/resource_intro.cc528743c8ff2758bb5b.png?raw=true" alt="placeholder" style={{width:"717.6px",height:"403.63px"}}/>
                <div class="card-body">
                    <br></br>
                    <h5 class="card-title" style={{fontFamily:"Times New Roman",fontSize:"30px",color:"black"}}>Introductory Level</h5>
                    <br/><br/><br/>
                     <a href="" class="btn btn-primary" style={{backgroundColor:"rgb(37,150,190)",fontFamily:"Times New Roman"}}>The Case for Taking AI Seriously as a Threat to Humanity</a>
                 </div>
                 
            </div>
            


            </div>
            <br></br>
            <hr style={{color:"black"}} />
            
            <h1 className="font1" style={{fontSize:"46px",color:"black"}}>Institutes</h1>
            <hr style={{color:"black"}}/>

            
            </div>

            <div class="container py-3">
                <div class="card" style={{backgroundColor:"white"}}>

                    <div class=" px-2">
                        <div class="card-block px-6">
                            <h4 class="card-title" style={{fontFamily:"Times New Roman",fontSize:"30px",color:"black"}}>Schwartz Reisman Institute</h4>
                            <br/>
                            <p class="card-text" style={{fontFamily:"Times New Roman",fontSize:"20px",color:"black"}}>
                                    The Schwartz Reisman Institute shares a range of events, news, and, videos 
                                    regarding safe, responsible, and inclusive technologies. View their seminar
                                     series, research, and members.
                             </p>

    
                            <a href="https://srinstitute.utoronto.ca/" class="mt-auto btn btn-primary" target="_blank" style={{backgroundColor:"rgb(37,150,190)",fontFamily:"Times New Roman"}}>Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:"white"}}>

                    <div class=" px-2">
                        <div class="card-block px-6">
                            <h4 class="card-title" style={{fontFamily:"Times New Roman",fontSize:"30px",color:"black"}}>Center for Human-Compatible AI</h4>
                            <br/>
                            <p class="card-text" style={{fontFamily:"Times New Roman",fontSize:"20px",color:"black"}}>
                            CHAI's mission is to reorient the direction AI is progressing in so that 
                            it can become more beneficial to systems. To learn more about ethics and 
                            AI CHAI has composed an Annotated Bibliography of Recommended Materials.
                             </p>

    
                            <a href="#" class="mt-auto btn btn-primary" style={{backgroundColor:"rgb(37,150,190)",fontFamily:"Times New Roman"}}>Learn More</a>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <hr style={{color:"black"}} />
            
                    <h1 className="font1" style={{fontSize:"46px",color:"black"}}>More Resources</h1>
                    <hr style={{color:"black"}}/>
                    <div class="button-container mt-4">
  <div class="button-row">
    <a type="button" href='https://arxiv.org/pdf/1606.06565.pdf' class=" new-btn btn btn-secondary " target="_blank" style={{backgroundColor:"rgb(37,150,190)",fontFamily:"Times New Roman"}}>Concrete Problems in AI Safety</a>
    <a type="button" href="https://vkrakovna.wordpress.com/ai-safety-resources/" class=" new-btn btn btn-secondary " target="_blank" style={{backgroundColor:"rgb(37,150,190)",fontFamily:"Times New Roman"}}>List of AI Safety Resources</a>
    <a type="button" href="https://futureoflife.org/ai/benefits-risks-of-artificial-intelligence/" class=" new-btn btn btn-secondary" target="_blank" style={{backgroundColor:"rgb(37,150,190)",fontFamily:"Times New Roman"}}>Benefits and Risks of AI</a>
  </div>
  <div class="button-row">
    <a type="button" href="https://www.connectedpapers.com/" class=" new-btn btn btn-secondary" target="_blank" style={{backgroundColor:"rgb(37,150,190)",fontFamily:"Times New Roman"}}>Connected Papers</a>
    <a type="button"  href="http://rohinshah.com/alignment-newsletter/" class=" new-btn btn btn-secondary" target="_blank" style={{backgroundColor:"rgb(37,150,190)",fontFamily:"Times New Roman"}}>Alignment Newsletter</a>
    <a type="button" href="https://docs.google.com/forms/d/e/1FAIpQLSfk1CgJmVKz_RLUMGenDHgZYmU7e9gfRX33MIV7SQPF8s7DaQ/viewform" class=" new-btn btn btn-secondary" target="_blank" style={{backgroundColor:"rgb(37,150,190)",fontFamily:"Times New Roman"}}>UofT Vector/DCS/Schwartz-Reisman AI Safety</a>
  </div>
</div>

            </div>
            
        <Footer/>
        </div>
    )
   
}

export default Opp;

//#18151f