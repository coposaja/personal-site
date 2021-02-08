import React, { useEffect, useState } from 'react';
import { NavigationLink } from '../../shared';
import { FaBars } from 'react-icons/fa';

import './Navbar.scss';

const Navbar = ({ toggleHandler }) => {
  const theme = 'light';
  const [scrolled, setScrolled] = useState(false);

  const onWindowScroll = () => {
    setScrolled(window.scrollY >= 80);
  }

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
    }
  }, [])

  return (
    <nav className={`navbar${scrolled ? '' : ' transparent'} ${theme}`}>
      <div className="navbar--container">
        <ul className="navbar--navigations">
          <NavigationLink
            to="home"
            label="Home"
            theme={theme}
          />
          <NavigationLink
            to="about-me"
            label="About Me"
            theme={theme}
          />
          <NavigationLink
            to="project"
            label="Projects"
            theme={theme}
          />
          <NavigationLink
            to="technology"
            label="Technologies"
            theme={theme}
          />
          <NavigationLink
            to="contact"
            label="Contact"
            theme={theme}
          />
        </ul>
        <div className="navbar--toggle" onClick={toggleHandler}>
          <FaBars />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
