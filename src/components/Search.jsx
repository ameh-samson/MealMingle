import { useState } from "react";
import { useGlobalContext } from "../Context";

const Search = () => {
  const [text, setText] = useState("");

  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      setText("");
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a meal"
          className="form-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn">
          Search
        </button>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={fetchRandomMeal}
        >
          Random Meal
        </button>
      </form>
    </div>
  );
};

export default Search;
