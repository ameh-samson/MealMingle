import { useGlobalContext } from "../Context";

const Meals = () => {
  const { meals, loading } = useGlobalContext();

  // loading meal
  if (loading) {
    return (
      <section className="section">
        <h4>Loading.....</h4>
      </section>
    );
  }

  return (
    <section className="section-center meal-section">
      {meals.map((meal) => {
        const { idMeal: id, strMeal: title, strMealThumb: img } = meal;
        return (
          <article key={id} className="meal">
            <img src={img} className="img" onClick={() => selectMeal(id)} />

            <footer>
              <h5>{title}</h5>
              <button className="like-btn" onClick={() => addToFavorites(id)}>
                +
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
