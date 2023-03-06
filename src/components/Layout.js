import React from 'react';



import CategoryButton from './CategoryButton';

const Layout = ({ categories, handleCategoryClick, children }) => {
  return (
    <div className='containerr'>
      <header>
      
    <h1>Ressursarkiv</h1>
  
      </header>
      <nav>
      </nav>
      <main>
        <h2>
       
        </h2>
        {children}
        
      </main>
    </div>
  );
};

export default Layout;
