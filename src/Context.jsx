import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  // link to The meal DB API
  const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
  const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  //   set function to fetch meal
  const fetchMeals = async (url) => {
    try {
      const res = await axios.get(url);
      setMeals(res.data.meals);
    } catch (err) {
      console.log(err);
    }
  };

  // fetch the meal data
  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  return <AppContext.Provider value={meals}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
