import React from 'react';
import { Link } from 'react-router-dom';

const CategoryButton = ({ categories, handleCategoryClick }) => {
  return (
    <nav>
      {categories.map((category, index) => (
        <Link key={index} to={`/resources/${category}`}>
          <button onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default CategoryButton;
