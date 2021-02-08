import React from 'react';

import './Button.scss';

const colors = [
  'primary', 'light', 'dark'
];

const types = [
  'solid', 'outline', 'link'
];

const sizes = [
  'small', 'large'
];

const Button = ({
  children,
  type,
  color,
  size,
  handleClick,
  disabled = false,
  ...rest
}) => {

  type = types.includes(type) ? type : 'solid';
  color = colors.includes(color) ? color : 'primary';
  size = sizes.includes(size) ? size : 'small';

  return (
    <button
      className={`btn btn-${type}-${color} btn-${size} ${disabled && 'disabled'}`}
      onClick={handleClick ? handleClick : () => { }}
    >
      {children}
    </button>
  )
}

export default Button;
