import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";
import { useState, useEffect } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import SavedNews from "../SavedNews/SavedNews";

import { CurrentPageContext } from "../../contexts/CurrentPageContext";
// import { getSearchResults } from "../../utils/NewsApi";
// import { parseCurrentDate, parsePreviousWeek } from "../../utils/constants";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  // useEffect(() => {
  //   getSearchResults()
  //     .then((data) => {
  //       const temperature = parseCurrentDate(data);
  //       setTemp(temperature);
  //       const locationData = parsePreviousWeek(data);
  //       setLocation(locationData);
  //     })
  //     .catch((error) => {
  //       console.error("An error occurred:", error);
  //     });
  // }, []);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        {
          handleCloseModal();
        }
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

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  return (
    <div>
      <CurrentPageContext.Provider
        value={{ currentPage, setCurrentPage, activeModal }}
      >
        <Switch>
          <Route exact path="/">
            <Header handleRegisterModal={handleRegisterModal} />
            <Main />
          </Route>
          <Route path="/saved-news">
            <SavedNews />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "register" && (
          <RegisterModal handleCloseModal={handleCloseModal} />
        )}
      </CurrentPageContext.Provider>
    </div>
  );
}

export default App;
