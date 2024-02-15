import Navagation from "../Navigation/Navagation";
import "./SavedNewsHeader.css";


const SavedNewsHeader = () => {
    console.log("SavedNewsHeader");
  
    return (
     <header className="savednews">
      <Navagation/>
      <div className="savednews__container">
        <h2 className="savednews__title"> Saved Articles</h2>
        <p className="savednews__desc">
          Elliott you have 5 saved articles
        </p>
        <p className="savednews__keywords">
          By KeyWords:
        </p>
        <span className="savednews__keywords-list">
          nature
        </span>
      </div>
     </header>
    );
  };
  
  export default SavedNewsHeader;