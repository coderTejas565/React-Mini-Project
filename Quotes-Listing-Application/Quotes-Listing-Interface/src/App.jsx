import { useEffect, useState } from "react";
import "./App.css";

function QuoteCard({ quote }) {
  return (
    <div className="card">
      <p className="content">"{quote.content}"</p>

      <h4 className="author">— {quote.author}</h4>

      {quote.tags?.length > 0 && (
        <div className="tags">
          {quote.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchQuotes() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human"
      );

      const data = await response.json();

      // 🔥 correct nesting
      setQuotes(data?.data?.data || []);
    } catch (err) {
      setError("Failed to fetch quotes");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <p className="status">Loading quotes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <p className="status error">{error}</p>
        <button onClick={fetchQuotes}>Retry</button>
      </div>
    );
  }

  if (!quotes.length) {
    return (
      <div className="app">
        <p>No quotes found</p>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Quotes Listing</h1>

      <button onClick={fetchQuotes}>Refresh</button>

      <div className="container">
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  );
}

export default App;