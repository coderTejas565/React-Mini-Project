function MealCard({ meal }) {
  return (
    <div className="card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <h3>{meal.strMeal}</h3>

      <p className="meta">
        {meal.strCategory} • {meal.strArea}
      </p>

      {meal.strTags && (
        <p className="tags">{meal.strTags}</p>
      )}

      <a href={meal.strYoutube} target="_blank" rel="noreferrer">
        <button className="btn">View Recipe</button>
      </a>
    </div>
  );
}

export default MealCard