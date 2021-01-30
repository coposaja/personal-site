import React from 'react';

import './Octagon.scss';

const Octagon = ({ children }) => {
  return (
    <div className="octagon">
      <span>
        {children}
      </span>
    </div>
  )
}

export default Octagon;
