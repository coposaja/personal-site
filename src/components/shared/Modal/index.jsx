import React, { useContext, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import './Modal.scss';
import { BackdropContext, ModalContext } from '../../../context';

const Modal = ({ children }) => {
  const [, setBackdropOpen] = useContext(BackdropContext);
  const [, setModalOpen] = useContext(ModalContext);

  const dismissModal = () => {
    setBackdropOpen(false);
    setModalOpen(false);
  }

  useEffect(() => {
    setBackdropOpen(true);
  }, [setBackdropOpen]);

  return (
    <div className="modal">
      <span className="modal--close" onClick={dismissModal}>
        <FaTimes />
      </span>
      {children}
    </div>
  )
}

export default Modal;
