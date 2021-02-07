import React, { useContext, useEffect, useState } from 'react';

import './Project.scss';
import { projectList } from '../../../constants';
import { Column, Modal, ProjectCard, ProjectDetail, YearNavigator } from '../../shared';
import { ModalContext } from '../../../context';

const Project = () => {
  const [selectedYear, setSelectedYear] = useState(0);
  const [modalContent, setModalContent] = useState(null);
  const [projects, setProjects] = useState(projectList);
  const [isOpenModal, setIsOpenModal] = useContext(ModalContext);

  const onProjectDetailOpen = (title, technologies, imageUrls, description) => {
    setModalContent({
      title: title,
      technologies: technologies,
      imageUrls: imageUrls,
      description: description,
    });
    setIsOpenModal(true);
  }

  useEffect(() => {
    setProjects(projectList.filter((project) => (
      project.years.includes(selectedYear ? selectedYear : project.years[0])
    )));
  }, [selectedYear]);

  return (
    <div className="project--container" id="project">
      <div className="project--wrapper">
        <h1>Projects</h1>

        <YearNavigator
          activeYear={selectedYear}
          changeYear={setSelectedYear}
        />

        <div className="project--content">
          {projects && projects.map((project, idx) => (
            <Column lg={4} md={6} sm={12} noPadding key={idx}>
              <ProjectCard
                title={project.title}
                techs={project.techs}
                backgroundUrl={project.backgroundUrl}
                imageUrls={project.imageUrls}
                description={project.description}
                handleClick={onProjectDetailOpen}
              />
            </Column>
          ))}
        </div>
      </div>

      {isOpenModal && modalContent && (
        <Modal>
          <ProjectDetail
            {...modalContent}
          />
        </Modal>
      )}
    </div>
  )
}

export default Project;
