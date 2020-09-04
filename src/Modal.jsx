import React from "react";
import "./App.css";
import ReactDom from "react-dom";

export default function Modal({ modalShow, children, onClose }) {
  if (!modalShow) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="overlayStyles">
      <div className="modalStyles">
        {children}
        <button className="closeModal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
