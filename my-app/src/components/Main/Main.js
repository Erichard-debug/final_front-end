import "./Main.css";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useContext } from "react";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";

const Main = ({
  handleRegisterModal,
  handleSaveArticle,
  handleRemoveArticle,
  isLoading,
}) => {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResults } = useContext(SearchResultsContext);

  return (
    <main className="main">
      <section className="content">
        <div className="content__results">
          {hasSearched && searchResults.length > 0 ? (
            <NewsCardList
              handleSaveArticle={handleSaveArticle}
              handleRemoveArticle={handleRemoveArticle}
              handleRegisterModal={handleRegisterModal}
            />
          ) : hasSearched && searchResults.length === 0 ? (
            <NoResults />
          ) : isLoading ? (
            <Preloader />
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
