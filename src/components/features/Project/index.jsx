import React, { useState } from 'react';

import './Project.scss';
import bidukImg from '../../../assets/images/biduk.svg';
import kajImg from '../../../assets/images/kaj.svg';
import iaiImg from '../../../assets/images/iai.svg';
import { Column, ProjectCard, YearNavigator } from '../../shared';

const Project = () => {
  const [selectedYear, setSelectedYear] = useState(0);

  return (
    <div className="project--container" id="project">
      <div className="project--wrapper">
        <h1>Projects</h1>

        <YearNavigator
          activeYear={selectedYear}
          changeYear={setSelectedYear}
        />

        <div className="project--content">
          <Column lg={4} md={6} sm={12} noPadding>
            <ProjectCard title="BIDUK" techs="ASP.NET | Web Forms" backgroundUrl={bidukImg} />
          </Column>
          <Column lg={4} md={6} sm={12} noPadding>
            <ProjectCard title="IAI Membership" techs="ASP.NET | Modified MVC" backgroundUrl={iaiImg} />
          </Column>
          <Column lg={4} md={6} sm={12} noPadding>
            <ProjectCard title="KAJ Pelayanan" techs="ASP.NET | Modified MVC | REST API" backgroundUrl={kajImg} />
          </Column>
        </div>
      </div>
    </div>
  )
}

export default Project;
