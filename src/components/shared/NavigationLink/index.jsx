import React from 'react';
import { Link } from 'react-scroll';

import './NavigationLink.scss';

const NavigationLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      duration={500}
      offset={-64}
      smooth
      spy
      className="navigation-link"
    >
      {label}
    </Link>
  )
}

export default NavigationLink;
