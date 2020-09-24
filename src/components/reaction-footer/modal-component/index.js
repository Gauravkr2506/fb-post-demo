import React, { createContext, useContext, useEffect, createRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { ReactComponent as Cross } from "./../../../assets/images/cross.svg";
import "./style.css";

const modalContext = createContext();

const Modal = ({ children, onModalClose }) => {
  useEffect(() => {
    const bodyElement = document.getElementsByTagName("body")[0];

    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);
    bodyElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", keyListener);
      bodyElement.style.overflow = "auto";
    };
  });

  const onOverlayClick = () => {
    onModalClose();
  };

  const onDialogClick = (event) => {
    event.stopPropagation();
  };

  let count = 0;
  const modalRef = createRef();
  const handleTabKey = (e) => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"],input[type="password"],input[type="number"], input[type="checkbox"], select'
    );

    if (document.activeElement) {
      const activeElement = document.activeElement;
      for (let index = 0; index < focusableModalElements.length; index++) {
        if (focusableModalElements[index] === activeElement) {
          count = index + 1;
        }
      }
    }
    if (!e.shiftKey) {
      count !== focusableModalElements.length ? count++ : (count = 1);
      const element = focusableModalElements[count - 1];
      element.focus();
      return e.preventDefault();
    } else if (e.shiftKey) {
      count > 1 ? count-- : (count = focusableModalElements.length);
      const element = focusableModalElements[count - 1];
      element.focus();
      return e.preventDefault();
    }
  };

  const keyListenersMap = new Map([
    [27, onModalClose],
    [9, handleTabKey],
  ]);

  return createPortal(
    <div
      className="modal-container"
      role="dialog"
      aria-modal="true"
      onClick={onOverlayClick}
    >
      <div className="modal-content" ref={modalRef} onClick={onDialogClick}>
        <modalContext.Provider value={{ onModalClose }}>
          {children}
        </modalContext.Provider>
      </div>
    </div>,
    document.body
  );
};

Modal.Header = function ModalHeader(props) {
  const closeIcon = props.closeIcon ?? true;
  const { onModalClose } = useContext(modalContext);

  return (
    <div className="modal-header">
      {props.children}
      {closeIcon && (
        <span className="cross-btn" title="close modal" onClick={onModalClose}>
          <Cross />
        </span>
      )}
    </div>
  );
};

Modal.Body = function ModalBody(props) {
  return <div>{props.children}</div>;
};

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};

export default Modal;
