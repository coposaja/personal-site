import React, { useCallback, useContext, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import './Modal.scss';
import { BackdropContext, ModalContext } from '../../../context';

const Modal = ({ children }) => {
  const [, setBackdropOpen] = useContext(BackdropContext);
  const [, setModalOpen] = useContext(ModalContext);

  const dismissModal = useCallback(
    () => {
      setBackdropOpen(false);
      setModalOpen(false);
    },
    [setBackdropOpen, setModalOpen],
  );

  useEffect(() => {
    const dismissOnEscape = (e) => {
      if (e.key === 'Escape') dismissModal();
    }
    window.addEventListener('keydown', dismissOnEscape);

    return () => {
      window.removeEventListener('keydown', dismissOnEscape);
    }
  }, [dismissModal])

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
