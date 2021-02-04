import React, { useContext } from 'react';
import { BackdropContext, ModalContext } from '../../../context';

import './Backdrop.scss';

const Backdrop = () => {
  const [isOpen, setIsOpen] = useContext(BackdropContext);
  const [isOpenModal, setIsOpenModal] = useContext(ModalContext);

  const backdropDismiss = () => {
    isOpenModal && setIsOpenModal(false);
    setIsOpen(false);
  }

  return (
    isOpen && (
      <div className="backdrop" onClick={backdropDismiss} />
    )
  )
}

export default Backdrop;
