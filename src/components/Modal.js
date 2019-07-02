import React from 'react';

const Modal = ({ closeModal, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={closeModal}>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};

export default Modal;