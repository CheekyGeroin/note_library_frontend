import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import SubmitBtn from "../SubmitButton/SubmitBtn";
import { updateNote } from "../../redux/notes/notesOperations";
import { useModal } from "../../customHooks/useModal";
const EditForm = (oldTitle, oldText) => {
  const [title, setTitle] = useState(oldTitle);
  const [text, setText] = useState(oldText);

  const { closeModal } = useModal();

  const handeChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "text":
        setText(value);
        break;
      default:
        return;
    }
  };

  const dispatch = useDispatch();
  const reset = () => {
    setTitle(" ");
    setText(" ");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const updNote = {
      title,
      text,
    };
    dispatch(updateNote(updNote));
    reset();
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label>
            Note's title
            <input
              type="text"
              name="title"
              value={title}
              onChange={handeChange}
            />
          </label>
        </li>
        <li>
          <label>
            Note's text
            <input
              type="text"
              name="text"
              value={text}
              onChange={handeChange}
            />
          </label>
        </li>
      </ul>
      <SubmitBtn />
    </form>
  );
};

export default EditForm;

EditForm.propTypes = {
  oldTitle: PropTypes.string,
  oldText: PropTypes.string,
};
