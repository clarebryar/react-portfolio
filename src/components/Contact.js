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

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const formStarted = (event) => {
    if (event.keyup) {
      return 'isInvalid'
    }
  }

    return (
        <>
        <Form style={{'textAlign': 'center', 'padding-top': 30, 'margin':'1em'}}>
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
          <InputGroup.Text>email</InputGroup.Text>
          <Form.Control aria-label="Amount (to the nearest dollar)" required />
       
        </InputGroup>
        </Col>
        </Row>
        <Row>
        <Col xs={6}>

        <InputGroup>
          <InputGroup.Text>Feedback</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" required />
        </InputGroup>
        </Col>
        </Row>
        <Row>
        <Col style= {{"textAlign": "center"}} xs={6}>

        <Button variant="info" type="submit">Submit</Button>
        </Col>
        </Row>
        </Form>
      </>
    )
}

export default Contact