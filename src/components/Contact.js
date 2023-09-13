import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Project from "../components/Project";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



function Contact() {
  const [validated, setValidated] = useState(false);
const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
   
    if (re.test(String(email).toLowerCase()) === false) {
      console.log('invalid')
      return <p type="invalid">
      Please choose a username.
    </p>
      
    }
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    console.log('notvalidated')
    }

    setValidated(true);
    validateEmail(email)
    
  };

 

    return (
        <>
        <Form style={{'textAlign': 'center', 'padding-top': 30, 'margin':'1em' }}>
         <Form.Label htmlFor="basic-url">Sign Up to Receive more Info! </Form.Label>

        <Row  >   
        <Col xs={6}>
        <InputGroup hasValidation className="mb-3">
          <InputGroup.Text id="basic-addon3">
           name
          </InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="basic-addon3"  type="text" required  />
        </InputGroup>
        </Col>
        </Row>
        <Row>
        <Col xs={6}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Email</InputGroup.Text>
          {setEmail}
          <Form.Control aria-label="Amount " required  />
       
        </InputGroup>
        </Col>
        </Row>
        <Row>
        <Col xs={6}>

        <InputGroup>
          <InputGroup.Text>Feedback</InputGroup.Text>
          <Form.Control aria-label="With textarea" required />
        </InputGroup>
        </Col>
        </Row>
        <Row>
        <Col style= {{"textAlign": "center"}} xs={6}>

        <Button onClick = {handleSubmit} variant="info" type="submit">Submit</Button>
        </Col>
        </Row>
        </Form>
      </>
    )
}

export default Contact