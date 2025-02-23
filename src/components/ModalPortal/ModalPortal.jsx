import React from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(
    <div>
      <div>{children}</div>
    </div>,
    document.querySelector("modal-root")
  );
};

export default ModalPortal;
