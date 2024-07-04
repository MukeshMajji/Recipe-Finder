import React from 'react';
import './Card.css';

const Card = ({ recipe }) => {
  return (
    <div className="card">
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <h3>Ingredients</h3>
      <div className="ingredient-list">
        {recipe.ingredientLines.map((ingredient, index) => (
          <p key={index}>{ingredient}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
