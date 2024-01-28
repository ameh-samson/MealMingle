import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem("favorites");

  if (favorites) {
    return (favorites = JSON.parse(localStorage.getItem("favorites")));
  } else {
    return (favorites = []);
  }
};

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

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

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    if (favoriteMeal) {
      meal = favorites.find((meal) => meal.idMeal === idMeal);
    } else {
      meal = meals.find((meal) => meal.idMeal === idMeal);
    }

    setSelectedMeal(meal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addToFavorites = (idMeal) => {
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
    if (alreadyFavorite) return;
    const updateFavorites = [...favorites, meal];
    setFavorites(updateFavorites);

    localStorage.setItem("favorites", JSON.stringify(updateFavorites));
  };

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
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
      value={{
        meals,
        loading,
        setSearchTerm,
        fetchRandomMeal,
        showModal,
        selectedMeal,
        selectMeal,
        closeModal,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
