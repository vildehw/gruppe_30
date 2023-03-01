import React from 'react';
import Layout from './Layout';

const ArticleCard = ({ resources, selectedCategory }) => {
  return (
    <Layout button={selectedCategory}>
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
    </Layout>
  );
};

export default ArticleCard;
