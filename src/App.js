import './App.css';
import './css/main.css';

import resources from './components/ressurser';
import React, { useState } from 'react';
import Knapp from './components/Knapp';
import Article from './components/Article';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const ResourceCards = () => {
  const categories = [...new Set(resources.map((resource) => resource.category))];
  const [Kategorivalg, setKategorivalg] = useState(categories[0]);

  const Knappetrykk = (category) => {
    setKategorivalg(category);
  };

  return (
    <Layout>
      <Knapp categories={categories} Knappetrykk={Knappetrykk} />
      <Routes>
        <Route exact path="/" element={<Article resources={resources} Kategorivalg={Kategorivalg} />} />
        <Route path="/:category" element={<Article resources={resources} Kategorivalg={Kategorivalg} />} />
      </Routes>
    </Layout>
  );
};

export default ResourceCards;


