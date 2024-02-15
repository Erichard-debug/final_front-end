import "./NewsCard.css"

const NewsCard = () => {
    console.log("NewsCard");

    return (
      <div className="card">
        <img
          className="card__image"
          src={newsData.image || newsData.urlToImage || defaultCardImage}
          alt={newsData.link || newsData.url}
        />
        <div className="card__description">
          <div className="card__description-container">
            <p className="card__date">{formattedDate}</p>
            <h3 className="card__title">{newsData.title}</h3>
            <p className="card__text">{newsData.text || newsData.description}</p>
          </div>
          <p className="card__source">
            {newsData.source.name || newsData.source}
          </p>
        </div>
      </div>
    );
  };
  
  export default NewsCard;