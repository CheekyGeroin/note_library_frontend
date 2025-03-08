import React from "react";
import ModalPortal from "../ModalPortal/ModalPortal";
import { useModal } from "../../customHooks/useModal";
import AddForm from "../AddForm/AddForm";
import EditForm from "../EditForm/EditForm";

const ModalManager = () => {
  const { modal, closeModal } = useModal();

  if (!modal.isOpen) return null;

  let ModalComponent = null;

  if (modal.type === "add") {
    ModalComponent = <AddForm />;
  } else if (modal.type === "upd") {
    ModalComponent = <EditForm {...modal.props} />;
  }

  return (
    <ModalPortal>
      <div onClick={closeModal}>
        <div onClick={(e) => e.stopPropagation()}>{ModalComponent}</div>
      </div>
    </ModalPortal>
  );
};

export default ModalManager;
