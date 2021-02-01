import React from 'react';

import './Column.scss';

const Column = ({ sm, md, lg, noPadding, children }) => {
  const classes = ['col'];
  lg && classes.push(`lg-${lg}`);
  md && classes.push(`md-${md}`);
  sm && classes.push(`sm-${sm}`);
  noPadding && classes.push('no-padding');

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Column;
