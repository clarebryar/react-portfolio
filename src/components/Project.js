import React, { useState } from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ProjectList() {


   
return (
<div style ={{'display':'flex', 'flex-wrap': 'wrap', 'justifyContent':'space-evenly'}}>
<Card style={{ width: '18rem' }} display="flex">
      <Card.Img variant="top" src="./images/book-search-engine.png" />
      <Card.Body>
        <Card.Title>Book Search Engine</Card.Title>
        <Card.Text>
         A MERN app that searches for books using Google Books API.
        </Card.Text>
        <a href='https://github.com/clarebryar/Book-Search-Engine'>
        <Button variant="info">Book Search Engine on Github</Button>
        </a>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem'}}  display="flex">
      <Card.Img variant="top" src="./images/PWA-demo.gif" />
      <Card.Body>
        <Card.Title>PWA Text Editor</Card.Title>
        <Card.Text>
          Text editor application, that is a Progressive Web App, and can download remotely to work offline.  
        </Card.Text>
        <a href='https://github.com/clarebryar/PWA-Text-Editor'>
        <Button variant="info">PWA Text Editor on Github</Button> </a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} display="flex">
      <Card.Img variant="top" src="./images/nosql-demo.gif" />
      <Card.Body>
        <Card.Title>No SQL Social Network</Card.Title>
        <Card.Text>
          This project is a social network API built with mongoDB, and mongoose
        </Card.Text>
        <a href = 'https://github.com/clarebryar/Employee-Roster'> 
        <Button variant="info">No SQL Social Network on Github</Button> </a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} display="flex">
      <Card.Img variant="top" src="./images/employeeRoster.gif" />
      <Card.Body>
        <Card.Title>Employee Roster </Card.Title>
        <Card.Text>
          This project uses mySQL database to keep track of employee information.
        </Card.Text>
        <a href='https://github.com/clarebryar/Employee-Roster'>
        <Button variant="info">Employee Roster on Github</Button></a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} display="flex">
      <Card.Img variant="top" src="./images/note-taker.png" />
      <Card.Body>
        <Card.Title>Note Taker</Card.Title>
        <Card.Text>
         Using express js, this app creates a new note and saves it amongst a list
        </Card.Text>
        <a href='https://github.com/clarebryar/11-Note-Taker'>
        <Button variant="info">Note Taker on Github</Button></a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem'}} display="flex">
      <Card.Img variant="top" src="./images/readMe-generator.png" />
      <Card.Body>
        <Card.Title>Read Me Generator</Card.Title>
        <Card.Text>
          This app generates a README.md file, based on the user's input
        </Card.Text>
        <a href='https://github.com/clarebryar/09-ReadMe-Generator/tree/main/Develop'>
        <Button variant="info">ReadMe Generator on Github</Button></a>
      </Card.Body>
    </Card>

</div> 
);
};


export default ProjectList