import React from 'react';

import './Octagon.scss';

const Octagon = ({ width, children }) => {
  const style = {
    width: (width ? width : null),
    paddingTop: (width ? width : null),
  };

  return (
    <div style={style} className="octagon">
      <span>
        {children}
      </span>
    </div >
  )
}

export default Octagon;
