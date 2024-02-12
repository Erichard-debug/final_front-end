import "./SearchForm.css";

const SearchForm = () => {
  console.log("SearchForm");

  return (
      <form className="search__form">
        <input
          type="text"
          className="search__form-input"
          id="search-item"
          name="keyword"
          placeholder="Enter topic"
        />
        <button type="text" className="search__form-submit">
          Search
        </button>
      </form>
  );
};

export default SearchForm;
