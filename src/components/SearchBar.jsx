// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchRecipesByCuisine } from '../features/recipes/recipesSlice';

const SearchBar = ({ onSearchResults }) => { // Accept onSearchResults as a prop
  const [cuisine, setCuisine] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (cuisine) {
      console.log("Searching for:", cuisine); // Debugging line
      const results = await dispatch(searchRecipesByCuisine(cuisine)).unwrap(); // Dispatch the search action
      onSearchResults(results.recipes); // Send search results back to LandingPage
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Search by cuisine"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
