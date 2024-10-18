// src/features/recipes/recipesSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Fetch recipes with pagination
export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async (page = 1) => {
  const response = await axios.get(`https://dummyjson.com/recipes?limit=12&skip=${(page - 1) * 12}`);
  return response.data; // Make sure this returns the entire response
});

// Search recipes by cuisine
export const searchRecipesByCuisine = createAsyncThunk('recipes/searchRecipesByCuisine', async (cuisine) => {
  const response = await axios.get(`https://dummyjson.com/recipes/search?q=${cuisine}`);
  return response.data; // Adjust based on the expected response structure
});

// Fetch recipe details
export const fetchRecipeDetail = createAsyncThunk('recipes/fetchRecipeDetail', async (id) => {
  const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
  return response.data;
});

// Create the slice
const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    recipe: null,
    loading: false,
    error: null,
    totalPages: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => { state.loading = true; })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload.recipes; // Adjust based on the response structure
        state.totalPages = Math.ceil(action.payload.total / 12); // Calculate total pages
      })
      .addCase(searchRecipesByCuisine.fulfilled, (state, action) => {
        state.recipes = action.payload.recipes; // Adjust based on the response structure
      })
      .addCase(fetchRecipeDetail.fulfilled, (state, action) => {
        state.recipe = action.payload;
      });
  },
});

// Export the reducer
export default recipesSlice.reducer;
