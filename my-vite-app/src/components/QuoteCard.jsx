function QuoteCard({ character, quote, image }) {
  return (
    <div className="card">
      <img src={image} alt={character} />
      <h5 className="card-title">{character}</h5>
      <p className="card-text">"{quote}"</p>
    </div>
  );
}

export default QuoteCard;