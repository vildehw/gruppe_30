import './App.css';
import './css/main.css';

import resources from './components/ressurser';
import React, { useState } from 'react';
import CategoryButton from './components/CategoryButton';
import ArticleCard from './components/ArticleCard';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const ResourceCards = () => {
  const categories = [...new Set(resources.map((resource) => resource.category))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Layout>
      
      <CategoryButton categories={categories} handleCategoryClick={handleCategoryClick} />
      <Routes>
        <Route exact path="/" element={<ArticleCard resources={resources} selectedCategory={selectedCategory} />} />
        <Route path="/:category" element={<ArticleCard resources={resources} selectedCategory={selectedCategory} />} />
      </Routes>
    </Layout>
  );
};

export default ResourceCards;


