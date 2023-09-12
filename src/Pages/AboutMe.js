import React from "react";


import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function AboutMe() {
        return (
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src="./images/rosegarden.jpg" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="./images/me-conner.jpg" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="./images/beach2.jpg" thumbnail />
                </Col>
              </Row>
              <Row>
                <h3>About Clare</h3>
            <p>Hi there! I am Clare, welcome to my portfolio! I am a Chicago native currently enrolled in a Full Stack Bootcamp. Pictured in my photos with me is my amazing boyfriend. We love to run, travel, and hang with friends. </p>
              </Row>
            </Container>

         
          );
}
