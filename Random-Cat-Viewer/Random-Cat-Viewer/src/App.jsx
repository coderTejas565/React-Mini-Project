import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cat, setCat] = useState(null);

  async function fetchCat() {

      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/cats/cat/random"
      );

      const data = await response.json();

      setCat(data?.data);
  }

  useEffect(() => {
    fetchCat();
  }, []);

  if (!cat) return null;

  return (
    <div className="app">
      <h1>Random Cat Viewer</h1>

<span className="ear-left"></span>
  <span className="ear-right"></span>

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

      <button onClick={fetchCat}>New Cat
      </button>
    </div>
  );
}

export default App;