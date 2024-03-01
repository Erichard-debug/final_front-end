import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useContext, useState } from "react";
import { SearchResultContext } from "../../contexts/SearchResultContext";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";

const NewsCardList = ({
  handleSaveArticle,
  handleRemoveArticle,
  onSignUp,
}) => {
  const [cardsDisplayed, setCardsDisplayed] = useState(3);
  const { searchResults } = useContext(SearchResultContext);
  const { hasSearched } = useContext(HasSearchedContext);

  const increaseVisibleCards = () => {
    setCardsDisplayed(cardsDisplayed + 3);
  };

  return (
    <section className="newscards">
      {hasSearched ? (
        <>
          <h2 className="newscards__title">Search results</h2>
          <div className="newscards__container">
            {searchResults.slice(0, cardsDisplayed).map((result) => {
              return (
                <NewsCard
                  newsData={result}
                  key={result.url}
                  handleSaveArticle={handleSaveArticle}
                  handleRemoveArticle={handleRemoveArticle}
                  onSignUp={onSignUp}
                />
              );
            })}
          </div>
          <button
            className={`newscards__button ${
              cardsDisplayed >= searchResults.length
                ? "newscards__button_hidden"
                : ""
            }`}
            onClick={increaseVisibleCards}
          >
            Show more
          </button>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default NewsCardList;