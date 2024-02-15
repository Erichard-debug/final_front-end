import "./Navagation.css";
import logo from "../../images/NewsExplorer-white.svg";
import logoBlack from "../../images/NewsExplorer.svg";
import logOutWhite from "../../images/logout-white.svg";
import logOutBlack from "../../images/logout.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { useContext } from "react";

const Navagation = () => {

  const { currentPage } = useContext(CurrentPageContext);

  return currentPage === "/" ? (
    <div className="nav">
      <NavLink to="/" className="nav__logo">
      <img src={logo} alt="logo" />
      </NavLink>
      <nav className="nav__links">
        <NavLink
          to="/"
          className="nav__link"
          activeClassName="nav__link_active"
        >
          Home
        </NavLink>
        <NavLink to="/saved-news" className="nav__link-news">
          Saved articles
        </NavLink>
        <button className="nav__button-loggedin">
          <p className="nav__username-loggedin">Elliott</p>
          <img src={logOutWhite} alt="logout" className="nav__logout" />
        </button>
      </nav>
    </div>
  ) : currentPage === "/saved-news" ? (
    <div className="nav__savednews">
      <NavLink to="/" className="nav__savednews-logo">
      <img src={logoBlack} alt="logo" />
      </NavLink>
      <nav className="nav__savednews-links">
        <NavLink
          exact
          to="/"
          className="nav__savednews-link"
        >
          Home
        </NavLink>
        <NavLink
          to="/saved-news"
          className="nav__savednews-link"
          activeClassName="nav__savednews-link_active"
        >
          Saved articles
        </NavLink>
        <button className="nav__savednews-button">
          <p className="nav__savednews-username">Elliott</p>
          <img
            src={logOutBlack}
            alt="logout"
            className="nav__savednews-logout"
          />
        </button>
      </nav>
    </div>
  ) : (
    <div>
    </div>
  );
}
  
export default Navagation;