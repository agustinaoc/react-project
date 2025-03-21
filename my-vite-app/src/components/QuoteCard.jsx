function QuoteCard({ character, quote, image }) {
    return (
      <div className="card">
        <img src={image} className="card-img-top" alt={character} />
        <div className="card-body">
          <h5 className="card-title">{character}</h5>
          <p className="card-text">"{quote}"</p>
        </div>
      </div>
    );
  }
  
  export default QuoteCard;
  