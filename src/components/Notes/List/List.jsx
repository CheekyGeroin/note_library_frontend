import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { selectNotes } from "../../../redux/notes/notesSelectors";

const List = () => {
  const cards = useSelector(selectNotes);

  return (
    <ul>
      {cards.notes.map(({ id, title, text }) => {
        return (
          <li key={id}>
            <Card id={id} title={title} text={text} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
