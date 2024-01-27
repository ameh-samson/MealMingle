import { useGlobalContext } from "../Context";

const Meals = () => {
  const { meals, loading } = useGlobalContext();

  // loading meal
  if (loading) {
    return (
      <div className="loading-section">
        <div class="loading-container">
          <div class="loading-circle"></div>
        </div>
      </div>
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
