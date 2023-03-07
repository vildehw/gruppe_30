import React from 'react';

const ArticleCard = ({ resources, selectedCategory }) => {
  return (
    <article className="ArticleCard">  
    <ul> 
      <h3>{selectedCategory}</h3>
      {resources
        .filter((resource) => resource.category === selectedCategory)
        .map((resource, index) => (
          <li key={index}>
            
            <a href={resource.url}>{resource.title}</a>
          </li>
        ))} 
      </ul>
    </article>
  );
};

export default ArticleCard;
