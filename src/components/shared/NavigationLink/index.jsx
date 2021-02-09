import React from 'react';
import { Link } from 'react-scroll';

import './NavigationLink.scss';

const NavigationLink = ({ to, label, theme, clickHandler }) => {
  return (
    <Link
      to={to}
      duration={500}
      offset={-64}
      smooth
      spy
      onClick={clickHandler ? clickHandler : () => { }}
      className={`navigation-link ${theme}`}
    >
      {label}
    </Link>
  )
}

export default NavigationLink;
