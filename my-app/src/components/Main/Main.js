import "./Main.css";
import About from "../About/About";
import PreLoader from "../Preloader/PreLoader";
import NoResults from "../NoResults/NoResults";
import SearchError from "../SearchError/SearchError";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useContext } from "react";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";
import { SearchResultContext } from "../../contexts/SearchResultContext";

const Main = ({
  onSignUp,
  handleSaveArticle,
  handleRemoveArticle,
  isLoading,
  searchError,
}) => {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResults } = useContext(SearchResultContext);

  return (
    <main className="main">
      <section className="content">
        <div className="content__results">
          {hasSearched && searchResults.length > 0 ? (
            <NewsCardList
              handleSaveArticle={handleSaveArticle}
              handleRemoveArticle={handleRemoveArticle}
              onSignUp={onSignUp}
            />
          ) : hasSearched && searchResults.length === 0 ? (
            <NoResults />
          ) : isLoading ? (
            <PreLoader />
          ) : searchError === true ? (
            <SearchError />
          ) : (
            ""
          )}
        </div>
      </section>
      <About />
    </main>
  );
};

export default Main;
