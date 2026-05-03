import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchJoke() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
      );

      const data = await response.json();

      setJoke(data.data);
    } catch (err) {
      setError("Failed to fetch joke");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <p className="status">Loading joke...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <p className="status error">{error}</p>
        <button onClick={fetchJoke}>Retry</button>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Joke Viewer</h1>

      <div className="card">
        <p className="joke">{joke?.content}</p>
      </div>

      <button onClick={fetchJoke}>
        {loading ? "Loading..." : "New Joke"}
      </button>
    </div>
  );
}

export default App;