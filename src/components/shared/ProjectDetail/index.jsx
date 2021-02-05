import React from 'react';
import { sampleUrl } from '../../../assets/images';

import './ProjectDetail.scss';

const ProjectDetail = () => {
  return (
    <div className="project-detail--container">
      <img src={sampleUrl} alt="sample" />
      <div className="project-detail--content">
        <div className="header">
          <h2>BIDUK (Basis Integrasi Umat Keuskupan)</h2>
          <p>ASP.Net | N-Tier Framework | SQL Server</p>
        </div>
        <div className="body">
          <p>
            A website that maintains Catholics data especially those whom belong to some diocese that has been decided to use this app.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail;
