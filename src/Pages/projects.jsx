import React, { useState } from 'react';
import './projects.css';
import projects from '../Data/projects.json';
import Footer from './Layout.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss} from '@fortawesome/free-solid-svg-icons';


const Projects = () =>{
    return(
        <div>
 <section >
	<div className="container py-4">
	<br/><br/>
		<h1 className="font-main-projects" style={{color:"black"}}>Projects</h1>
    <hr style={{color:"grey"}}/>


		<br/><br/><br/>
        {projects.map((project, index) => (

		<article className="postcard " style={{background:"white"}}>

				<img className="postcard__img" src={project.imagePath} alt={project.name} style={{height:"380px"}}/>	
			<div class="card-body"> 
				
				<h1 className="postcard__title " style={{color:"black"}}>{project.name}</h1>
				<div className="postcard__preview-txt" style={{color:"black"}}>{project.description}</div>
                <a href="https://discord.com/channels/1110690752658415668/1110694536579121273" target="_blank" class="btn btn-primary" style={{backgroundColor:"#2596be",fontFamily:"Times New Roman"}}>Full Project Proposal</a>

			</div>

		</article>
		        ))}

  </div>
  <div class="row justify-content-center">
  <div class="image-card col-md-4 ">

  </div>
</div>


</section>


<Footer/>
</div> 

    )


}


export default Projects;