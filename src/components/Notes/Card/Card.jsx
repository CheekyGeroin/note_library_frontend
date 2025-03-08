import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../../redux/notes/notesOperations";
import { useModal } from "../../../customHooks/useModal";

const Card = (title, text) => {
  const dispatch = useDispatch();
  const { openModal } = useModal();

  const deleteBtn = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <button
        type="button"
        onClick={() => openModal("upd", { oldTitle: title, oldText: text })}
      >
        Edit
      </button>
      <button type="button" onClick={deleteBtn}>
        Delete
      </button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
