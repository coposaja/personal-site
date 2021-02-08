import React, { useContext, useEffect, useState } from 'react';
import { useTransition } from 'react-spring';

import './Project.scss';
import { projectList } from '../../../constants';
import { AnimatedColumn, Modal, ProjectCard, ProjectDetail, YearNavigator } from '../../shared';
import { ModalContext } from '../../../context';

const Project = () => {
  const theme = 'light';
  const [selectedYear, setSelectedYear] = useState(0);
  const [modalContent, setModalContent] = useState(null);
  const [projects, setProjects] = useState(projectList);
  const [isOpenModal, setIsOpenModal] = useContext(ModalContext);
  const transitions = useTransition(
    projects.map((project) => ({ ...project })),
    project => project.title,
    {
      enter: { transform: 'translate3d(0, 0px, 0)', opacity: 1 },
      leave: { transform: 'translate3d(0, 40px, 0)', opacity: 0 },
      update: [{ opacity: 0 }, { opacity: 1 }]
    });

  const onProjectDetailOpen = (title, technologies, imageUrls, description) => {
    setModalContent({
      title: title,
      technologies: technologies,
      imageUrls: imageUrls,
      description: description,
    });
    setIsOpenModal(true);
  };

  useEffect(() => {
    setProjects(projectList.filter((project) => (
      project.years.includes(selectedYear ? selectedYear : project.years[0])
    )));
  }, [selectedYear]);

  return (
    <div className={`project--container ${theme}`} id="project">
      <div className="project--wrapper">
        <h1>Projects</h1>

        <YearNavigator
          activeYear={selectedYear}
          changeYear={setSelectedYear}
        />

        <div className="project--content">
          {transitions.map(({ item, props, key }) => {
            return (
              <AnimatedColumn lg={4} md={6} sm={12} noPadding key={key} style={props}>
                <ProjectCard
                  theme={theme}
                  title={item.title}
                  techs={item.techs}
                  backgroundUrl={item.backgroundUrl}
                  imageUrls={item.imageUrls}
                  description={item.description}
                  handleClick={onProjectDetailOpen}
                />
              </AnimatedColumn>
            )
          })}
        </div>
      </div>

      {isOpenModal && modalContent && (
        <Modal>
          <ProjectDetail
            theme={theme}
            {...modalContent}
          />
        </Modal>
      )}
    </div>
  )
}

export default Project;
