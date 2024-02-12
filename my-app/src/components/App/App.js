import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";
import { useState, useEffect } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
// import { getSearchResults } from "../../utils/NewsApi";
// import { parseCurrentDate, parsePreviousWeek } from "../../utils/constants";

function App() {
  const [activeModal, setActiveModal] = useState("");

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
      <Switch>
        <Route  exact path="/">
          <Header handleRegisterModal={handleRegisterModal} />
          <Main />
        </Route>
        <Route path="/saved-news">SavedNews</Route>
      </Switch>
      <Footer />
      {activeModal === "register" && (
        <RegisterModal handleCloseModal={handleCloseModal} />
      )}
      ;
    </div>
  );
}

export default App;
