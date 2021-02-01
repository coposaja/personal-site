import React from 'react';

import './ProjectCard.scss';
import { Button } from '..';

const ProjectCard = ({ title, techs, backgroundUrl }) => {
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
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  )
}

export default ProjectCard;
