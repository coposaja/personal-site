import React from 'react';

import './ProjectCard.scss';
import { Button } from '..';

const ProjectCard = ({ title, techs, backgroundUrl, description, handleClick }) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="overlay">
        <span>
          <h3>{title}</h3>
          <p>{techs}</p>
        </span>
        <Button
          type="outline"
          color="primary"
          handleClick={() => {
            handleClick(title, techs, [], description)
          }}
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  )
}

export default ProjectCard;
