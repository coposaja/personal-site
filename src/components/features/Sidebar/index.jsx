import React from 'react';
import { FaTimes } from 'react-icons/fa';

import './Sidebar.scss';
import { NavigationLink } from '../../shared';

const Sidebar = ({ isOpen, toggleHandler }) => {
  const theme = 'light';

  return (
    <aside className={`sidebar${isOpen ? ' open' : ''} ${theme}`}>
      <div className="close" onClick={toggleHandler}>
        <FaTimes />
      </div>
      <div className="sidebar--navigations">
        <NavigationLink
          to="home"
          label="Home"
          clickHandler={toggleHandler}
        />
        <NavigationLink
          to="about-me"
          label="About Me"
          clickHandler={toggleHandler}
        />
        <NavigationLink
          to="project"
          label="Projects"
          clickHandler={toggleHandler}
        />
        <NavigationLink
          to="technology"
          label="Technologies"
          clickHandler={toggleHandler}
        />
        <NavigationLink
          to="contact"
          label="Contact"
          clickHandler={toggleHandler}
        />
      </div>
    </aside>
  )
}

export default Sidebar;
