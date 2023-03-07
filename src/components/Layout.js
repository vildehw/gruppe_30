import React from 'react';
import { Link } from 'react-router-dom';
import Knapp from './Knapp';

const Layout = ({ children }) => {
  return (
    <div className="containerr">
      <header>
       
       <h1>Ressursarkiv</h1>
       
      </header> 
      <nav>
    
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
