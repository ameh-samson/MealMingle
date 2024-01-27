import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // link to The meal DB API
  const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  //   set function to fetch meal
  const fetchMeal = async (url) => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      if (res.data.meals) {
        setMeals(res.data.meals);
      } else {
        setMeals([]);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  // fetch random meal
  const fetchRandomMeal = () => {
    fetchMeal(randomMealUrl);
  };

  // fetch the meal data
  useEffect(() => {
    fetchMeal(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{ meals, loading, setSearchTerm, fetchRandomMeal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
