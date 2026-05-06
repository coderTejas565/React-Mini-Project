import React from 'react';

const MealCard = ({ meal }) => {
  const { 
    strMeal, 
    strMealThumb, 
    strCategory, 
    strArea, 
    strInstructions, 
    strYoutube 
  } = meal;

  const shortDescription = strInstructions 
    ? strInstructions.substring(0, 100) + "..." 
    : "No description available.";

  return (
    <div className="meal-card">
      <div className="card-image">
        <img src={strMealThumb} loading="lazy" />
        {strCategory && <span className="category-badge">{strCategory}</span>}
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3 className="meal-title">{strMeal}</h3>
          <span className="area-tag">{strArea}</span>
        </div>

        <p className="meal-desc">{shortDescription}</p>

        <div className="card-footer">
          <button className="view-btn">View Recipe</button>
          
          {strYoutube && (
            <a 
              href={strYoutube} 
              target="_blank"  
              className="youtube-link"
            >
              <span className="play-icon">▶</span> Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealCard;