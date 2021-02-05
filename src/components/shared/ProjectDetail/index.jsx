import React from 'react';
import { sampleUrl } from '../../../assets/images';

import './ProjectDetail.scss';

const ProjectDetail = ({ title, technologies, description }) => {
  return (
    <div className="project-detail--container">
      <img src={sampleUrl} alt="sample" />
      <div className="project-detail--content">
        <div className="header">
          <h2>{title}</h2>
          <p>{technologies}</p>
        </div>
        <div className="body">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail;
