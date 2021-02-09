import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';

import './Sidebar.scss';
import { NavigationLink } from '../../shared';
import { ThemeContext } from '../../../context';

const Sidebar = ({ isOpen, toggleHandler }) => {
  const [theme,] = useContext(ThemeContext);

  return (
    <aside className={`sidebar${isOpen ? ' open' : ''} ${theme}`}>
      <div className="close" onClick={toggleHandler}>
        <FaTimes />
      </div>
      <div className="sidebar--navigations">
        <NavigationLink
          to="home"
          label="Home"
          theme={theme}
          clickHandler={toggleHandler}
        />
        <NavigationLink
          to="about-me"
          label="About Me"
          theme={theme}
          clickHandler={toggleHandler}
        />
        <NavigationLink
          to="project"
          label="Projects"
          theme={theme}
          clickHandler={toggleHandler}
        />
        <NavigationLink
          to="technology"
          label="Technologies"
          theme={theme}
          clickHandler={toggleHandler}
        />
        <NavigationLink
          to="contact"
          label="Contact"
          theme={theme}
          clickHandler={toggleHandler}
        />
      </div>
    </aside>
  )
}

export default Sidebar;
