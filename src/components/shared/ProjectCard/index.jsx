import React, { useContext } from 'react';

import './ProjectCard.scss';
import { Button } from '..';
import Modal from '../Modal';
import { ModalContext } from '../../../context';

const ProjectCard = ({ title, techs, backgroundUrl }) => {
  const [isOpenModal, setIsOpenModal] = useContext(ModalContext);
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
          handleClick={() => { setIsOpenModal(true) }}
        >
          LEARN MORE
        </Button>
      </div>
      {isOpenModal && <Modal><h1>Test</h1></Modal>}
    </div>
  )
}

export default ProjectCard;
