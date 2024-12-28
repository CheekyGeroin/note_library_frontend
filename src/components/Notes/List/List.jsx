import { useEffect, useState } from "react";
import { getNotes } from "../../../services/notesAPI";

const List = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(getNotes());
  }, []);
  return (
    <ul>
      {cards.map(() => {
        return <li key={cards.id}></li>;
      })}
    </ul>
  );
};

export default List;
