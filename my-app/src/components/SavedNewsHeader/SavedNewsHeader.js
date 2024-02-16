import Navagation from "../Navigation/Navagation";
import "./SavedNewsHeader.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedArticlesContext } from "../../contexts/SavedArticles";

const SavedNewsHeader = ({ handleSignOut }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SavedArticlesContext);

  const userArticles = savedArticles.filter(
    (article) => article.owner === currentUser._id
  );

  const keyWordArray = userArticles.map((article) => article.keyword);

  const getKeyWordString = (keywords) => {
    if (keyWordArray.length === 1) {
      return `${keyWordArray}`;
    }
    if (keyWordArray.length > 1) {
      const count = {};
      for (let keyword of keywords) {
        if (count[keyword]) {
          count[keyword]++;
        } else {
          count[keyword] = 1;
        }
      }

      const sortedKeyWordArray = [];
      for (const item in count) {
        sortedKeyWordArray.push([item, count[item]]);
      }
      sortedKeyWordArray.sort((a, b) => {
        return b[1] - a[1];
      });

      if (sortedKeyWordArray.length === 1) {
        return `${sortedKeyWordArray[0][0]}`;
      } else if (sortedKeyWordArray.length === 2) {
        return `${sortedKeyWordArray[0][0]} and ${sortedKeyWordArray[1][0]}`;
      } else {
        return `${sortedKeyWordArray[0][0]}, ${sortedKeyWordArray[1][0]}, and ${
          sortedKeyWordArray.length - 2
        } more`;
      }
    } else {
      return null;
    }
  };

  const keyWordString = getKeyWordString(keyWordArray);

  return (
    <header className="savednews">
      <Navagation handleSignOut={handleSignOut} />
      <div className="savednews__container">
        <h2 className="savednews__title"> Saved Articles</h2>
        <p className="savednews__desc">
          {currentUser.name}, you have {userArticles.length} saved articles
          {userArticles.length !== 1 ? "s" : ""}
        </p>
        <p className="savednews__keywords">By KeyWords:</p>
        <span className="savednews__keywords-list"> {keyWordString}</span>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
