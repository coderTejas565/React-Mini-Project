import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCat() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/cats/cat/random"
      );

      const data = await response.json();

      setCat(data?.data);
    } catch (err) {
      setError("Failed to fetch cat");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCat();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <p className="status">Loading cat...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <p className="status error">{error}</p>
        <button onClick={fetchCat}>Retry</button>
      </div>
    );
  }

  if (!cat) return null;

  return (
    <div className="app">
      <h1>Random Cat Viewer</h1>

      <div className="card">
        <img src={cat.image} alt={cat.name} />

        <h2>{cat.name}</h2>

        <p className="meta">{cat.origin}</p>

        <p className="temperament">{cat.temperament}</p>

        <p className="lifespan">Life span: {cat.life_span} years</p>

        <p className="desc">
          {cat.description?.slice(0, 120)}...
        </p>
      </div>

      <button onClick={fetchCat}>
        {loading ? "Loading..." : "New Cat"}
      </button>
    </div>
  );
}

export default App;