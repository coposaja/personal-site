import React, { useContext } from 'react';
import { BackdropContext } from '../../../context';

import './Backdrop.scss';

const Backdrop = ({ children }) => {
  const [isOpen, setIsOpen] = useContext(BackdropContext);
  return (
    isOpen && (
      <div className="backdrop" onClick={() => { setIsOpen(!isOpen) }}>
        {children}
      </div>
    )
  )
}

export default Backdrop;
