// src/components/LandingPage.jsx
import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Import SearchBar component
import '../App.css'; // Import CSS
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  // Callback function to handle search results from SearchBar
  const handleSearchResults = (recipes) => {
    setSearchResults(recipes); // Update search results state
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to the Recipe Finder</h1>
      </header>

      <main className="landing-main">
        <div className="landing-cards-container">
          {/* Left Card: Search Functionality */}
          <div className="landing-card search-card">
            <h2>Search Recipes by Cuisine</h2>
            <SearchBar onSearchResults={handleSearchResults} /> {/* Pass callback to SearchBar */}
            
            {searchResults.length > 0 ? (
              <div className="recipe-grid">
                {searchResults.map((recipe) => (
                  <div key={recipe.id} className="recipe-card">
                    <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                    <h3>{recipe.name}</h3>
                  </div>
                ))}
              </div>
            ) : (
              <p>No recipes to show. Please search for a cuisine.</p>
            )}
          </div>

          {/* Right Card: Explore All Recipes Button */}
          <div className="landing-card explore-card">
            <h2>You can explore more here!!</h2>
            <Link to="/recipes/1"> {/* Link to the recipes page */}
              <button className="explore-recipes-btn">Explore</button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="landing-footer">
        <p>&copy; 2024 Recipe Finder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
