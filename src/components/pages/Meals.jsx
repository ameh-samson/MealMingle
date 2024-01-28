import { useGlobalContext } from "../../Context";

const Meals = () => {
  const { meals, loading, selectMeal } = useGlobalContext();

  // loading meal
  if (loading) {
    return (
      <div className="loading-section">
        <div className="loading-container">
          <div className="loading-circle"></div>
        </div>
      </div>
    );
  }

  // No meal found
  if (meals.length < 1) {
    return (
      <section className="section">
        <p style={{ textAlign: "center", color: "#6b7280" }}>
          No meal match your search. Please try again
        </p>
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
