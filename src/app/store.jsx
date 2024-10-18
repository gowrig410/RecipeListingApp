// src/app/store.jsx
import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../features/recipes/recipesSlice"; // Make sure this path is correct

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});

export default store; // Ensure you're exporting the store
