import { useEffect, useState } from "react";
import "./App.css";
import QuoteCard from "./Component/QuoteCard";

function App() {
  const [quotes, setQuotes] = useState([]);

  const [page, setPage] = useState(1);

  async function fetchQuotes(pageNum = 1) {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/quotes?page=${pageNum}&limit=10`
      );

      const data = await response.json();

      if (data.success) {
        if (pageNum === 1) {
          setQuotes(data.data.data);
        } else {
          setQuotes((prev) => [...prev, ...data.data.data]);
        }
      } else {
        throw new Error();
      }
  }

  useEffect(() => {
    fetchQuotes(1);
  }, []);

  function loadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchQuotes(nextPage);
  }

  return (
    <div className="app">
      <h1>Quotes Gallery</h1>
      <p className="subtitle">
        A collection of timeless thoughts and ideas
      </p>

      <div className="container">
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>

      <button onClick={loadMore}>Load More
      </button>
    </div>
  );
}

export default App;