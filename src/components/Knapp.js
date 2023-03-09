
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Knapp = ({ categories, Knappetrykk }) => {
  return (
    <nav>
      {categories.map((category, index) => (
        <NavLink key={index} to={category}>
          {/* kilde brukt til navlinks :https://reactrouter.com/en/main/components/nav-link */}
          <button onClick={() => Knappetrykk(category)}>{category}</button>
        </NavLink>
      ))}
    </nav>
  );
};

export default Knapp;

