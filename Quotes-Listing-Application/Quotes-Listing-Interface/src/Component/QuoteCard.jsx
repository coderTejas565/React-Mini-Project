function QuoteCard({ quote }) {
  console.log(quote?.author);
  
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

export default QuoteCard;