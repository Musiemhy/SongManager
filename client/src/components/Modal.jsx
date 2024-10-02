import React from "react";
import ReactDom from "react-dom";
import { ModalContainer, ModalContent, CloseButton } from "../styles";

const Modal = ({ open, children, onClose }) => {
  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        {children}
      </ModalContent>
    </ModalContainer>,
    document.getElementById("portal")
  );
};
export default Modal;
