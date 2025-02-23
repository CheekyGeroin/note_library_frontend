import { useState } from "react";
import { useDispatch } from "react-redux";
import SubmitBtn from "../SubmitButton/SubmitBtn";
import { toast } from "react-toastify";
import { addNewNote } from "../../redux/notes/notesOperations";
import { useModal } from "../../customHooks/useModal";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

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

    if (title || text === " ") {
      toast.error("Please fill all fields");
      return;
    }

    const newNote = {
      title,
      text,
    };
    dispatch(addNewNote(newNote));
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

export default AddForm;
