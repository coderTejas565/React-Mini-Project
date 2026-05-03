import { useEffect, useState } from "react";
import "./App.css";
import MealCard from "../Component/MealCard";

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchMeals() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/meals"
      );

      const data = await response.json();

      setMeals(data.data.data);
    } catch (err) {
      setError("Failed to fetch meals");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <p className="status">Loading meals...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <p className="status error">{error}</p>
        <button onClick={fetchMeals}>Retry</button>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Meals Listing Interface</h1>

      <button onClick={fetchMeals}>Refresh Meals</button>

      <div className="container">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default App;