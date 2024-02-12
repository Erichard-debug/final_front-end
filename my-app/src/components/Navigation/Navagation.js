import "./Navagation.css";
import logo from "../../images/NewsExplorer-white.svg";
import logout from "../../images/logout-white.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navagation = ({onSignUp}) => {
    console.log("Navagation");
  
    return (
      <nav className="nav">
        <div className="nav_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav__profile">
          <NavLink>
            <button type="text" className="nav__home-btn">
              Home
            </button>
          </NavLink>
          <NavLink>
            <button type="text" className="nav__saved-artcles-btn">
              Saved Articles
            </button>
          </NavLink>
          <div>
            <button type="text" className="nav__profile-btn" onClick={onSignUp}>
              Elliott <img src={logout} alt="logout icon" />
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navagation;