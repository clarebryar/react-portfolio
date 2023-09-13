import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Project from "../components/Project";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Resume () {
    return (
        <Row  style={{'margin-left': '3em'}}>
    <a href='#Resume' style= {{"color":"antiquewhite", 'textDecoration': 'none',  }} download>Click to download</a>
    <h2> Experience</h2>
        <ul>
            <li>
                Service Titan 
                <p>Pro Product Success Manager</p>
            </li>
            <li>
                Schedule Engine 
                <p>Customer Success Manager </p>
            </li>
            <li >
                Groupon 
                <p style={{'margin-bottom':'0'}}>Merchant Success Manager</p>
                <p>Account Manager</p>
            </li>
        </ul>

        <h2> Education</h2>
        <ul>
            <li>
                Siena College  
                <p>Bachelor of Arts in Psycholog and Marketing </p>
            </li>
            <li> Northwestern University 
                <p>Full Stack Cooding Bootcamp</p>
            </li>
        </ul>
        
    
    
    </Row>
    )

}