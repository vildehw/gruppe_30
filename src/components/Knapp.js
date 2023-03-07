import React from 'react';
import { Link } from 'react-router-dom';

const Knapp = ({ categories, Knappetrykk }) => {
  return (
    <nav>
      {categories.map((category, index) => (
        <Link key={index} to={`/${category}`}>
          <button onClick={() => Knappetrykk(category)}>{category}</button>
        </Link>
      ))}
    </nav>
  );
};

export default Knapp;
