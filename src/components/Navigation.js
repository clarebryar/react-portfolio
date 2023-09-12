import React, { useState } from 'react';



function Navigation({ currentPage, handlePageChange }) {
        return (
          <div>
          <h1 >Clare Bryar</h1>
          
          <ul className="nav nav-tabs">
            <li className="nav-item" >
              <a 
                href="#aboutMe"
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#project"
                onClick={() => handlePageChange('Project')}
                
      
                className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
              
      
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
              
      
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
           
          </ul>
          </div>
        );
      }
    
      

export default Navigation;