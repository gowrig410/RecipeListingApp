// src/pages/HomePage.js
import React from 'react';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div>
      <h1>Recipe List</h1>
      {/* Search bar to search recipes by cuisine */}
      <SearchBar />
      {/* List of recipes with pagination */}
      <RecipeList />
    </div>
  );
};

export default HomePage;
