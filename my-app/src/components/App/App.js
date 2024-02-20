import "./App.css";

import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";

import RegisterModal from "../RegisterModal/RegisterModal";
import SignInModal from "../SignInModal/SigninModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";

import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";
import { SearchResultContext } from "../../contexts/SearchResultContext";
import { KeyWordContext } from "../../contexts/KeyWordContext";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { MobileContext } from "../../contexts/MobileContext";

import { getSearchResults } from "../../utils/NewsApi";
import { register, signIn, getContent } from "../../utils/auth";
import {
  getSavedArticles,
  addSavedArticle,
  removeSavedArticle,
} from "../../utils/Api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [keyword, setKeyWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getContent(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setIsLoggedIn(true);
          }
        })
        .then(() => {
          getSavedArticles(jwt).then((articles) => {
            setSavedArticles(articles);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isLoggedIn]);

  const handleSubmit = (request) => {
    setIsLoading(true);

    request()
      .then(() => {
        if (activeModal === "register") {
          setServerError(false);
        } else {
          setServerError(false);
          handleCloseModal();
        }
      })
      .catch((err) => {
        console.error(err);
        setServerError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
          handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  useEffect(() => {
    const handleClickClose = (evt) => {
      if (
        evt.target.classList.contains("item_modal") ||
        evt.target.classList.contains("modal")
      ) {
        handleCloseModal();
      }
    };
    document.addEventListener("click", handleClickClose);
    return () => {
      document.removeEventListener("click", handleClickClose);
    };
  }, []);

  const handleSignIn = (values) => {
    const makeRequest = () => {
      return signIn(values).then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
        localStorage.setItem("jwt", user.token);
      });
    };
    handleSubmit(makeRequest);
  };

  const handleRegister = (values) => {
    const makeRequest = () => {
      return register(values).then((user) => {
        if (user) {
          handleSuccessModal();
        }
      });
    };
    handleSubmit(makeRequest);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleSuccessModal = () => {
    setActiveModal("success");
  };

  const handleSignInModal = () => {
    setActiveModal("signin");
  };

  const handleSignOut = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
    setCurrentUser({});
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  };

  const handleSaveArticle = ({ newsData, keyword, token }) => {
    if (!savedArticles.some((article) => article.link === newsData.url)) {
      addSavedArticle(newsData, keyword, token)
        .then((data) => {
          setSavedArticles([data.data, ...savedArticles]);
          const savedArticleId = data.data._id;
          const newArticle = { ...newsData, _id: savedArticleId };
          const newSearchResults = searchResults.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResults(newSearchResults);
        })
        .catch((err) => console.error(err));
    } else if (savedArticles.some((article) => article.link === newsData.url)) {
      removeSavedArticle(newsData, token)
        .then(() => {
          const unsaveNewsArticles = savedArticles.filter(
            (article) => article._id !== newsData._id
          );
          setSavedArticles(unsaveNewsArticles);

          const newArticle = { ...newsData, _id: "" };
          const newSearchResults = searchResults.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResults(newSearchResults);
        })
        .catch((err) => console.error(err));
    }
  };

  const handleRemoveArticle = ({ newsData, token }) => {
    removeSavedArticle(newsData, token)
      .then(() => {
        const unsaveNewsArticles = savedArticles.filter(
          (article) => article._id !== newsData._id
        );
        setSavedArticles(unsaveNewsArticles);
      })
      .catch((err) => console.error(err));
  };

  const handleAltClick = () => {
    if (activeModal === "signin") {
      handleCloseModal();
      handleRegisterModal();
    } else {
      handleCloseModal();
      handleSignInModal();
    }
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleSearch = ({ keyword }) => {
    setKeyWord(keyword);
    setIsSearching(true);
    getSearchResults(keyword)
      .then((res) => {
        setSearchResults(res.articles);
        setHasSearched(true);
        setIsSearching(false);
        setSearchError(false);
      })
      .catch((err) => {
        console.error(err);
        setIsSearching(false);
        setSearchError(true);
      });
  };

  return (
    <div>
      <CurrentPageContext.Provider
        value={{ currentPage, setCurrentPage, activeModal }}
      >
        <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
          <HasSearchedContext.Provider value={{ hasSearched }}>
            <SearchResultContext.Provider value={{ searchResults }}>
              <SavedArticlesContext.Provider
                value={{ savedArticles, setSavedArticles }}
              >
                <MobileContext.Provider
                  value={{ mobileMenuOpen, openMobileMenu, closeMobileMenu }}
                >
                  <KeyWordContext.Provider value={{ keyword, setKeyWord }}>
                    <Switch>
                      <Route exact path="/">
                        <Header
                          onSignIn={handleSignInModal}
                          onSignOut={handleSignOut}
                          handleSearch={handleSearch}
                        />
                        <Main
                          onSignUp={handleRegisterModal}
                          handleSaveArticle={handleSaveArticle}
                          handleRemoveArticle={handleRemoveArticle}
                          isLoading={isSearching}
                          searchError={searchError}
                        />
                      </Route>
                      <ProtectedRoute path="/saved-news">
                        <SavedNews
                          onSignOut={handleSignOut}
                          handleRemoveArticle={handleRemoveArticle}
                        />
                      </ProtectedRoute>
                    </Switch>
                    <Footer />
                    {activeModal === "signin" && (
                      <SignInModal
                        handleCloseModal={handleCloseModal}
                        handleSignIn={handleSignIn}
                        handleAltClick={handleAltClick}
                        serverError={serverError}
                        isLoading={isLoading}
                      />
                    )}
                    {activeModal === "register" && (
                      <RegisterModal
                        handleCloseModal={handleCloseModal}
                        handleAltClick={handleAltClick}
                        handleRegister={handleRegister}
                        serverError={serverError}
                        isLoading={isLoading}
                      />
                    )}
                    {activeModal === "success" && (
                      <SuccessModal
                        handleCloseModal={handleCloseModal}
                        handleAltClick={handleSignInModal}
                      />
                    )}
                  </KeyWordContext.Provider>
                </MobileContext.Provider>
              </SavedArticlesContext.Provider>
            </SearchResultContext.Provider>
          </HasSearchedContext.Provider>
        </CurrentUserContext.Provider>
      </CurrentPageContext.Provider>
    </div>
  );
}

export default App;
