import "./Header.css";
import Navagation from "../Navigation/Navagation";
import SearchForm from "../SearchForm/SearchForm";

const Header = ({hanleSignInModal,handleSignOut,handleSearch}) => {

  return (
    <header className="header">
      <Navagation hanleSignInModal={hanleSignInModal} handleSignOut={handleSignOut}/>
      <div className="header__search">
      <h1 className="header__title">What's going on in the world?</h1>
      <p className="header__title-des">
        Find the latest news on any topic and save them in your personal account
      </p>
      </div>
      <SearchForm handleSearch={handleSearch}/>
    </header>
  );
};

export default Header;
