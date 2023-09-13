import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Project from "../components/Project";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

 function Resume () {
   
    return (
        <Row  style={{'marginLeft': '3em'}}>
    <a style= {{"color":"antiquewhite", 'textDecoration': 'none',  }} download='resume.txt' target="blank" href='http://localhost:3000/?#resume' >Click to download</a>
    <h2> Experience</h2>
        <ul>
            <li>
                Company: Service Titan 
                <p>Title: Pro Product Success Manager</p>
            </li>
            <li>
                Company: Schedule Engine 
                <p>Title: Customer Success Manager </p>
            </li>
            <li >
                Company: Groupon 
                <p style={{'marginBottom':'0'}}>Title: Merchant Success Manager</p>
                <p>Title: Account Manager</p>
            </li>
        </ul>

        <h2> Education</h2>
        <ul>
            <li>
                Siena College  
                <p>Bachelor of Arts in Psychology and Marketing </p>
            </li>
            <li> Northwestern University 
                <p style={{'marginBottom':'0'}}>Full Stack Coding Bootcamp</p>
                <p>Skils: React, Node.js, Express, MongoDB, SQL, HTML, CSS</p>
            </li>
        </ul>
        
    
    
    </Row>
    )

}
export default Resume;