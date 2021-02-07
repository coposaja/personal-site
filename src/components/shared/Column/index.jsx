import React from 'react';
import { animated } from 'react-spring';

import './Column.scss';

const Column = ({ sm, md, lg, noPadding, style, children }) => {
  const classes = ['col'];
  lg && classes.push(`lg-${lg}`);
  md && classes.push(`md-${md}`);
  sm && classes.push(`sm-${sm}`);
  noPadding && classes.push('no-padding');

  return (
    <div className={classes.join(' ')} style={style}>
      {children}
    </div>
  )
}

const AnimatedColumn = animated(Column);

export {
  AnimatedColumn,
  Column,
};
