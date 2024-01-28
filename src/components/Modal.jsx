import { useGlobalContext } from "../Context";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();

  const {
    strMeal: title,
    strMealThumb: img,
    strInstructions: instructions,
    strSource: source,
  } = selectedMeal;

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={img} alt={title} className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking Instruction</p>
          <p>{instructions}</p>
          <a href={source} target="_blank">
            Original Source
          </a>
          <button className="btn close-btn" onClick={closeModal}>
            close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
