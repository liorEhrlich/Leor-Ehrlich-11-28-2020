import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const modalRoot = document.getElementById("modal");

const Modal = ({ isOpen, children }) => {
  const rootElement = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(rootElement);

    return () => {
      modalRoot.removeChild(rootElement);
    };
  }, [rootElement]);

  if (!isOpen) {
    return false;
  }

  return createPortal(
    <ModalBackdrop>
      <ModalContainer>{children}</ModalContainer>
    </ModalBackdrop>,
    rootElement
  );
};

const ModalBackdrop = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.div`
  width: 300px;
  height: 120px;
  background-color: ${props => props.theme.colors.primaryBackground};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export default Modal;
