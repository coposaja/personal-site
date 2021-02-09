import React from 'react';

import './ProjectCard.scss';
import { Button } from '..';

const ProjectCard = ({ theme, title, techs, backgroundUrl, imageUrls, description, handleClick }) => {
  return (
    <div className={`project-card ${theme}`} style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="overlay">
        <span>
          <h3>{title}</h3>
          <p>{techs}</p>
        </span>
        <Button
          type="outline"
          color="primary"
          handleClick={() => {
            handleClick(title, techs, imageUrls, description)
          }}
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  )
}

export default ProjectCard;
