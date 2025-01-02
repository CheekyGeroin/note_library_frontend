import { useState } from "react";
import notes from "../../../services/notesAPI";
import Card from "../Card/Card";

const List = () => {
  const [cards, setCards] = useState([]);
  setCards(notes.getNotes());
  return (
    <ul>
      {cards.map(({ id, title, text }) => {
        return (
          <li key={id}>
            <Card title={title} text={text} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
