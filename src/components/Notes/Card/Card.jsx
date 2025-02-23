import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../../redux/notes/notesOperations";

const Card = (title, text) => {
  const dispatch = useDispatch();

  const deleteBtn = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <button>Edit</button>
      <button onClick={deleteBtn}>Delete</button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
