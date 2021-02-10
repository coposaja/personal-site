import React, { useRef } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';

import './ProjectDetail.scss';

const ProjectDetail = ({ theme, title, technologies, imageUrls, description }) => {
  const carousel = useRef(null);

  const myArrow = ({ type, onClick, isEdge }) => {
    const arrow = type === consts.PREV ? '❮' : '❯'
    const classNames = ["rec", "rec-arrow", `rec-arrow-${type === consts.PREV ? 'left' : 'right'}`];
    return (
      <button className={classNames.join(' ')} onClick={onClick} disabled={isEdge}>
        {arrow}
      </button>
    )
  }

  const myPagination = ({ pages, activePage, onClick }) => (
    <div className="rec rec-pagination">
      {pages.map((page) => {
        const isActive = activePage === page;
        const classNames = ["rec", "rec-page", `${isActive ? 'active' : ''}`];

        return (
          <span
            key={page}
            className={classNames.join(' ')}
            onClick={() => onClick(page)}
          />
        )
      })}
    </div>
  )

  return (
    <div className={`project-detail--container ${theme}`}>
      <Carousel
        ref={carousel}
        itemsToScroll={1}
        itemsToShow={1}
        renderArrow={myArrow}
        renderPagination={myPagination}
        breakPoints={[
          { width: 1, showArrows: false },
          { width: 481, showArrows: true }
        ]}
      >
        {imageUrls.map((image, idx) => (
          <img key={idx} src={image} alt="sample" />
        ))}
      </Carousel>
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
