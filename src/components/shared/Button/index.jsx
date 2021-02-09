import React from 'react';
import { Link } from 'react-scroll';

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

const components = [
  'button', 'link-scroll', 'link'
]

const Button = ({
  children,
  type,
  color,
  size,
  handleClick,
  component,
  goTo,
  disabled = false,
  ...rest
}) => {

  type = types.includes(type) ? type : 'solid';
  color = colors.includes(color) ? color : 'primary';
  size = sizes.includes(size) ? size : 'small';
  component = components.includes(component) ? component : 'button'

  switch (component) {
    case 'link-scroll':
      return (
        <Link
          to={goTo}
          duration={500}
          offset={-64}
          smooth
          spy
          className={`btn btn-${type}-${color} btn-${size} ${disabled && 'disabled'}`}
          onClick={handleClick ? handleClick : () => { }}
        >
          {children}
        </Link>
      );

    case 'link':
      return (
        <a
          href={goTo}
          className={`btn btn-${type}-${color} btn-${size} ${disabled && 'disabled'}`}
          onClick={handleClick ? handleClick : () => { }}
        >
          {children}
        </a>
      );

    default:
      return (
        <button
          className={`btn btn-${type}-${color} btn-${size} ${disabled && 'disabled'}`}
          onClick={handleClick ? handleClick : () => { }}
        >
          {children}
        </button>
      );
  }
}

export default Button;
