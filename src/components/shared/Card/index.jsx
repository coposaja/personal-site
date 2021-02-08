import React from 'react';

import './Card.scss';

const Card = ({ theme, children }) => {
  return (
    <div className={`card ${theme}`}>
      {children}
    </div>
  )
}

export default Card;
