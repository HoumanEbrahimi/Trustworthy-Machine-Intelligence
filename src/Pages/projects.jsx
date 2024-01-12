import React, { useState } from 'react';
import './projects.css';
import projects from '../Data/projects.json';
import Footer from './Layout.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss} from '@fortawesome/free-solid-svg-icons';
//<a href="https://discord.com/channels/1110690752658415668/1110694536579121273" target="_blank" class="btn btn-primary" style={{backgroundColor:"#2596be",fontFamily:"Times New Roman"}}>Full Project Proposal</a>


const Projects = () =>{
    return(
        <div>

 <section >
	<div className="container">
	<br/><br/>
		<h1 className="font-main-projects" style={{color:"black"}}>Projects</h1>
    <hr style={{color:"grey"}}/>


		<br/><br/><br/>
		<div className="project-container ">

        {projects.map((project, index) => (

			           <div class="card " style={{width: "45rem", height:"40rem"}}>
					   <img class="card-top" src={project.imagePath} alt={project.name} style={{width:"717.6px",height:"403.63px",objectFit:"cover"}}/>
					   <div class="card-body">
					   <br></br>
	   
						   <h3 class="card-title"  style={{fontFamily:"50px",color:"black"}}>{project.name}</h3>
						   <p class="card-text">{project.description}</p>
						   <br></br>
						</div>
					</div>

/*
		<article className="postcard light" style={{background:"white"}}>

				<img className="postcard__img" src={project.imagePath} alt={project.name} style={{width:"200px",height:"200px"}}/>	
			<div className="postcard__text t-dark"> 
				
				<h1 className="postcard__title " style={{color:"black"}}>{project.name}</h1>
				<div className="postcard__preview-txt" style={{color:"black"}}>{project.description}</div>
                <a href="https://discord.com/channels/1110690752658415668/1110694536579121273" target="_blank" class="btn btn-primary" style={{backgroundColor:"#2596be",fontFamily:"Times New Roman"}}>Full Project Proposal</a>

			</div>
			

		</article>
*/
		/*
 <div class="card">
      <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Sunset</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
       <a href="" class="btn btn-outline-success btn-sm">Read More</a>
        <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
      </div>
	  */

		/*
  <article class="postcard light">
		<img class="postcard__img" src={project.imagePath} alt={project.description} />
		<div class="postcard__text t-dark">
			<h1 class="postcard__title">{project.name}</h1>

			<div class="postcard__bar"></div>
			<div class="postcard__preview-txt">{project.description}</div>

		</div>
	</article>
		
		*/
		
		        ))}

  </div>
  

</div>

</section>


<Footer/>
</div> 

    )


}


export default Projects;