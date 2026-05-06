import { useEffect, useState, useCallback } from "react";
import "./App.css";
import MealCard from "../Component/MealCard";

function App() {
  const [meals, setMeals] = useState([]);

  const fetchMeals = useCallback(async () => {
      const response = await fetch("https://api.freeapi.app/api/v1/public/meals");
    
      
      const json = await response.json();
      setMeals(json?.data?.data || []);
    
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Meals Listing</h1>
        <p className="subtitle">Discover delicious recipes from around the world</p>
      </header>

      <main className="content">
      
      <div className="meal-grid">
                {meals.map((meal) => (
                  <MealCard key={meal.idMeal} meal={meal} />
                ))}
              </div>
      </main>
    </div>
  );
}

export default App;