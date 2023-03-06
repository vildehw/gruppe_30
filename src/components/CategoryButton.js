import React from 'react';
import { NavLink } from 'react-router-dom'

const CategoryButton = ({ categories, handleCategoryClick }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <button key={index} onClick={() => handleCategoryClick(category)}>
          <NavLink to={category}>{category}</NavLink>
        </button>
      ))}
    </div>
  );
};

export default CategoryButton;
