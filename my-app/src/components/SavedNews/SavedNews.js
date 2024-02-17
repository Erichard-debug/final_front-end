import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

const SavedNews = ({
  handleSignOut,
  handleRemoveArticle,
}) => {
  return (
    <div>
      <SavedNewsHeader handleSignOut={handleSignOut} />
      <SavedNewsCardList handleRemoveArticle={handleRemoveArticle}/>
    </div>
  );
};

export default SavedNews;
