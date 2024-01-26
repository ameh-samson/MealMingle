import { useGlobalContext } from "../Context";

const Meal = () => {
  // acces data from context
  const { meal } = useGlobalContext();

  console.log(meal);
};

export default Meal;
