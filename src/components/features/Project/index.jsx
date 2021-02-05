import React, { useContext, useState } from 'react';

import './Project.scss';
import bidukImg from '../../../assets/images/biduk.svg';
import kajImg from '../../../assets/images/kaj.svg';
import iaiImg from '../../../assets/images/iai.svg';
import { Column, Modal, ProjectCard, ProjectDetail, YearNavigator } from '../../shared';
import { ModalContext } from '../../../context';

const Project = () => {
  const [selectedYear, setSelectedYear] = useState(0);
  const [modalContent, setModalContent] = useState(null);
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
            <ProjectCard
              title="BIDUK"
              techs="ASP.NET | Web Forms"
              backgroundUrl={bidukImg}
              description="A website that maintains Catholics data especially those whom belong to some diocese that has been decided to use this app."
              handleClick={onProjectDetailOpen}
            />
          </Column>
          <Column lg={4} md={6} sm={12} noPadding>
            <ProjectCard
              title="IAI Membership"
              techs="ASP.NET | Modified MVC"
              backgroundUrl={iaiImg}
              description="A website that maintains Catholics data especially those whom belong to some diocese that has been decided to use this app."
              handleClick={onProjectDetailOpen}
            />
          </Column>
          <Column lg={4} md={6} sm={12} noPadding>
            <ProjectCard
              title="KAJ Pelayanan"
              techs="ASP.NET | Modified MVC | REST API"
              backgroundUrl={kajImg}
              description="A website that maintains Catholics data especially those whom belong to some diocese that has been decided to use this app."
              handleClick={onProjectDetailOpen}
            />
          </Column>
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
