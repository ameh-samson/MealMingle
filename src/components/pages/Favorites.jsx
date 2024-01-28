import { useGlobalContext } from "../../Context";

const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();

  if (favorites.length < 1) {
    return (
      <section className="section">
        <p style={{ textAlign: "center", color: "#6b7280" }}>
          No meal in your favorites. Search and add a meal
        </p>
      </section>
    );
  }

  return (
    <section className="section-center meal-section favorites">
      <div className="meal favorites">
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal: id, strMealThumb: img } = item;

            return (
              <div key={id} className="favorite-item">
                <img
                  src={img}
                  className="favorite-img img"
                  onClick={() => selectMeal(id, true)}
                />
                <button
                  className="remove-btn btn close-btn"
                  onClick={() => removeFromFavorites(id)}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
