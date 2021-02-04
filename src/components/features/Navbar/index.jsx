import React, { useEffect, useState } from 'react';
import { NavigationLink } from '../../shared';
import { FaBars } from 'react-icons/fa';

import './Navbar.scss';

const Navbar = ({ toggleHandler }) => {
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
    <nav className={`navbar${scrolled ? '' : ' transparent'}`}>
      <div className="navbar--container">
        <ul className="navbar--navigations">
          <NavigationLink
            to="home"
            label="Home"
          />
          <NavigationLink
            to="about-me"
            label="About Me"
          />
          <NavigationLink
            to="project"
            label="Projects"
          />
          <NavigationLink
            to="technology"
            label="Technologies"
          />
          <NavigationLink
            to="contact"
            label="Contact"
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
