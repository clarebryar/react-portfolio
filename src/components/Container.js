import React  from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Project from "../components/Project";
import AboutMe from "../Pages/AboutMe";
import { useState } from "react";

export default function Container() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Project') {
        return <Project />;
      }
      if (currentPage === 'Contact') {
        return <Contact/>;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>

        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    
        {renderPage()}
        <Footer />
      </div>
    );
  }
  