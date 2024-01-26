import { useGlobalContext } from "../Context";

const Meal = () => {
  const { meal } = useGlobalContext();

  console.log(meal);
};

export default Meal;
