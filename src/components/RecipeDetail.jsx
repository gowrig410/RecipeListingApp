// src/components/RecipeDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeDetail } from '../features/recipes/recipesSlice';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

const RecipeDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = useSelector((state) => state.recipes.recipe);
  const navigate = useNavigate(); // For programmatic navigation

  useEffect(() => {
    dispatch(fetchRecipeDetail(id));
  }, [dispatch, id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-detail-container">
      <div className="recipe-detail-content">
        <h1 className="recipe-detail-title">{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} className="recipe-detail-image" />
        <div className="recipe-detail-info">
          <h2>Ingredients</h2>
          <ul className="recipe-detail-ingredients">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>Instructions</h2>
          <p className="recipe-detail-instructions">{recipe.instructions.join(' ')}</p>
          <h3>Preparation Time: <span className="recipe-detail-time">{recipe.prepTimeMinutes} minutes</span></h3>
          <h3>Cooking Time: <span className="recipe-detail-time">{recipe.cookTimeMinutes} minutes</span></h3>
          <h3>Cuisine: <span className="recipe-detail-cuisine">{recipe.cuisine}</span></h3>
        </div>
        <button className="go-back-btn" onClick={() => navigate(-1)}>Go Back</button> {/* Go Back Button */}
      </div>
    </div>
  );
};

export default RecipeDetail;
