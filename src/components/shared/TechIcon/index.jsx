import React from 'react';

import './TechIcon.scss';

const TechIcon = ({ imageSrc }) => {
  return (
    <img
      className="tech-icon"
      src={imageSrc}
      alt="Related Tech Icon"
    />
  )
}

export default TechIcon;
