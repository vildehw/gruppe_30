import React from 'react';

const ArticleCard = ({ resources, selectedCategory }) => {
  return (
    <article className="ArticleCard">
      {resources
        .filter((resource) => resource.category === selectedCategory)
        .map((resource, index) => (
          <div key={index}>
            <h3>{resource.title}</h3>
            <p>{resource.url}</p>
          </div>
        ))}
    </article>
  );
};

export default ArticleCard;
