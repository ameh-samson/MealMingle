import { useGlobalContext } from "../Context";

const Search = () => {
  const context = useGlobalContext();
  console.log(context);
  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="Search for a meal"
          className="form-input"
          // value={text}
          // onChange={handleChange}
        />
        <button type="submit" className="btn">
          Search
        </button>
        <button
          type="button"
          className="btn btn-hipster"
          // onClick={FetchRandomMeal}
        >
          surprise me
        </button>
      </form>
    </div>
  );
};

export default Search;
