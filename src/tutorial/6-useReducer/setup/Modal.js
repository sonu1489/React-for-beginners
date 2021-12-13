import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div style={{ color: "red" }} className="modal">
      {modalContent}
    </div>
  );
};

export default Modal;
