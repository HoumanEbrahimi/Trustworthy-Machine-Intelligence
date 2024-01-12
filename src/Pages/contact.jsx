/*import React, { useState,useRef } from 'react';
import './contact.css';
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast,faAddressCard,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Container from 'react-bootstrap/Container';

import Footer from './Layout.js';


const Contact = () =>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_trpsmxg', 'template_tblf3vk', e.target, '0SxWog8GT0430vm8f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    return(
        <div >

        <div>
            
            <div className="font center">
                   <p>Please fill out the form with your details and your message. We will aim to respond within 2-3 business days </p> 
                    </div>
            <Container className="bg-light rounded p-4 shadow-lg ">
            <Form   ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label style={{color:"black"}} className="form-label"  for="name">
            Name
          </label>
          <input className="form-control" name="name" type="text" id="name" required placeholder="enter your name please"/>
        </div>
        <div className="mb-3">
          <label style={{color:"black"}} className="form-label" htmlFor="email" >
            Email
          </label>
          <input className="form-control" type="email" name="email" id="email" required placeholder="johndoe@hotmail.com"/>
        </div>
        <div className="mb-3">
          <label style={{color:"black"}} className="form-label" htmlFor="email" >
            Subject
          </label>
          <input className="form-control" type="text" name="subject" id="subject" required placeholder="Enter your subject"/>
        </div>
        <div className="mb-3">
          <label style={{color:"black"}} className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" name="message" id="message" required placeholder="Message" style={{height:"200px"}}/>
        </div>
        <button className="btn btn-danger" type="submit" style={{width:"200px"}}> Send
        </button>

        </Form>
            </Container>

                

        </div>
        <Footer/>
        </div>


    )


}


export default Contact;
*/

import React, { useState,useRef } from 'react';
import './contact.css';
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast,faAddressCard,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Form, Input, TextArea, Button } from "semantic-ui-react";

import Footer from './Layout.js';


const Contact = () =>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_trpsmxg', 'template_tblf3vk', e.target, '0SxWog8GT0430vm8f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    return(
        <div >

        <div className="contain">
            
            <div className="left-half">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfM3FLyjZFq8Ue2Bi2DEZZXnpUX-e-5TTrvR2-dpZqEilitvg/viewform">

            </a>
                <div className="icon-inline move-right" >Check out our latest podcast</div>

                <div className="icon-inline2 move-right2" >Become a member</div>

                
                <div className="icon-inline3 move-right3" >Subscribe to our mailing list </div>

            </div>
            <div className="right-half ">
            <div className="font move-top">
                    Please fill out the form with your details and your message. We will aim to respond within 2-3 business days
                    </div>
                    <br/><br/><br/>
            <div className="bg-light rounded p-4 shadow-lg ">
            <Form  ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label"  htmlFor="name">
            Name
          </label>
          <input className="form-control" name="name" type="text" id="name" required placeholder="enter your name please"/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email" >
            Email
          </label>
          <input className="form-control" type="email" name="email" id="email" required placeholder="johndoe@hotmail.com"/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email" >
            Subject
          </label>
          <input className="form-control" type="text" name="subject" id="subject" required placeholder="Enter your subject"/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" name="message" id="message" required placeholder="Message" style={{height:"200px"}}/>
        </div>
        <button className="btn btn-danger" type="submit" style={{width:"200px"}}> Send
        </button>

        </Form>
            </div>

                
            </div>

        </div>
        <Footer/>
        </div>


    )


}


export default Contact;
