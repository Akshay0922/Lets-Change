import React from "react";
import "./modal.css";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <span className="modal-close" onClick={onClose}>
          ✖
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;