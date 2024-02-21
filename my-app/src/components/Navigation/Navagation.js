import "./Navagation.css";
import Mobile from "../Mobile/Mobile";
import logOutWhite from "../../images/logout-white.svg";
import logOutBlack from "../../images/logout.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { MobileContext } from "../../contexts/MobileContext";
import { useContext } from "react";

const Navagation = ({ onSignIn, onSignOut }) => {
  const { currentPage, activeModal } = useContext(CurrentPageContext);
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  const { mobileMenuOpen, openMobileMenu, closeMobileMenu } =
    useContext(MobileContext);

    const handleMobileMenu = () => {
      if (mobileMenuOpen === false) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    };

  return isLoggedIn && currentPage === "/" ? (
    <div className={`nav ${mobileMenuOpen === true ? "nav__menu-open" : ""}`}>
      <NavLink to="/" className="nav__logo">
        NewsExplorer
      </NavLink>
      <button
        className={`nav__menu-button ${
          mobileMenuOpen === true ? "nav__menu-button_open" : ""
        }`}
        onClick={handleMobileMenu}
      />
      {mobileMenuOpen && (
        <Mobile onSignIn={onSignIn} onSignOut={onSignOut} />
      )}
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
        <button className="nav__button-loggedin" onClick={onSignOut}>
          <p className="nav__username-loggedin">{currentUser.name}</p>
          <img src={logOutWhite} alt="logout" className="nav__logout" />
        </button>
      </nav>
    </div>
  ) : isLoggedIn && currentPage === "/saved-news" ? (
    <div className={`nav__savednews ${mobileMenuOpen ? "nav__savednews_open" : ""}`}>
      <NavLink to="/" className="nav__savednews-logo">
        NewsExplorer
      </NavLink>
      <button
        className="nav__savednews-menu-button"
        onClick={handleMobileMenu}
      />
      {mobileMenuOpen && (
        <Mobile onSignIn={onSignIn} onSignOut={onSignOut} />
      )}
      <nav className="nav__savednews-links">
        <NavLink exact to="/" className="nav__savednews-link">
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
          <p className="nav__savednews-username">{currentUser.name}</p>
          <img
            src={logOutBlack}
            alt="logout"
            className="nav__savednews-logout"
          />
        </button>
      </nav>
    </div>
  ) : (
    <div className={`nav ${mobileMenuOpen === true ? "nav__menu-open" : ""}`}>
      <NavLink to="/" className="nav__logo">
        NewsExplorer
      </NavLink>
      <button
        className={`nav__menu-button ${
          activeModal !== "" ? "nav__menu-button_hidden" : ""
        } ${mobileMenuOpen === true ? "nav__menu-button_open" : ""}`}
        onClick={handleMobileMenu}
      />
      {mobileMenuOpen && (
        <Mobile onSignIn={onSignIn} onSignOut={onSignOut} />
      )}
      <nav className="nav__links">
        <NavLink
          to="/"
          className="nav__link"
          activeClassName="nav__link_active"
        >
          Home
        </NavLink>
        <button className="nav__button" onClick={onSignIn}>
          Sign In
        </button>
      </nav>
    </div>
  );
};

export default Navagation;
