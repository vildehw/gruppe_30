import React from 'react';

const ArticleCard = ({ resources, selectedCategory }) => {
  return (
      <article className={selectedCategory}>
        {resources
          .filter((resource) => resource.category === selectedCategory)
          .map((resource, index) => (
            <div key={index}>
              <h3>{resource.title}</h3>
              <li><a href={resource.url}>{resource.url}</a></li>
            </div>
          ))}
          
      </article>
  );
};

export default ArticleCard;
