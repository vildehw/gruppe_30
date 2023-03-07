import React from 'react';

const Article = ({ resources, Kategorivalg }) => {
  return ( 
    <main>
      <article className="Article">  
      <ul> 
        <h3>{Kategorivalg}</h3>
        {resources.filter((resource) => resource.category === Kategorivalg).map((resource, index) => ( 
            <li key={index}>
              <a href={resource.url}>{resource.title}</a>
            </li>
          ))} 
        </ul>
      </article> 
    </main>
  );
};

export default Article;
