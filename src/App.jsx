// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import LandingPage from './components/LandingPage'; // Import LandingPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Set LandingPage as the home route */}
        <Route path="/recipes/:page" element={<RecipeList />} />
        <Route path="/recipes/:page/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
