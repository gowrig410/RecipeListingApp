// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../features/recipes/recipesSlice';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes, loading, error, totalPages } = useSelector((state) => state.recipes);
  const { page } = useParams();
  const navigate = useNavigate();
  const currentPage = Number(page) || 1;

  useEffect(() => {
    dispatch(fetchRecipes(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (newPage) => {
    navigate(`/recipes/${newPage}`);
  };

  // Function to navigate to the landing page
  const goToLandingPage = () => {
    navigate('/');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipes: {error.message || error}</div>;

  return (
    <div className="recipe-list">
      <h1>Recipes</h1>
      

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h3 className="recipe-title">{recipe.name}</h3>
            <Link to={`/recipes/${currentPage}/${recipe.id}`}>
              <button className="know-more-btn">Click to Know More</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="pagination">
      <button onClick={goToLandingPage} className="go-back-btn">Back to Landing Page</button>

        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
