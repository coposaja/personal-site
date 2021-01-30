import React from 'react';

import './Column.scss';

const Column = ({ sm, md, lg, children }) => {
  const classes = ['col'];
  lg && classes.push(`lg-${lg}`);
  md && classes.push(`md-${md}`);
  sm && classes.push(`sm-${sm}`);

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Column;
