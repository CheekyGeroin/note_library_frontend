import { useModal } from "../../customHooks/useModal";

const AddBtn = () => {
  const { openModal } = useModal();
  return (
    <button type="button" onClick={() => openModal("add")}>
      Add new note
    </button>
  );
};

export default AddBtn;
