import React from 'react';

const CategoryButton = ({ categories, handleCategoryClick }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <button key={index} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButton;
