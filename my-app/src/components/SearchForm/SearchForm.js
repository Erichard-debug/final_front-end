import "./SearchForm.css";
import { useForm } from "react-hook-form";

const SearchForm = (handleSearch) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSearchSubmit = ({ keyword }) => {
    handleSearch({ keyword });
  };

  return (
    <form
      className="search__form"
      handleSubmit={handleSubmit(handleSearchSubmit)}
    >
      <input
        type="text"
        className="search__form-input"
        id="search-item"
        name="keyword"
        placeholder="Enter topic"
        {...register("keyword", { required: "Please enter a keyword" })}
      />
      {errors?.keyword && (
        <p className="search__form-invalid">{errors.keyword.message}</p>
      )}
      <button type="text" className="search__form-submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
