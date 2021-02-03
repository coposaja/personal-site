import React, { useEffect, useState } from 'react';
import { NavigationLink } from '../../shared';

import './Navbar.scss';

const Navbar = () => {
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
            to="who-am-i"
            label="Who Am I"
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
      </div>
    </nav>
  )
}

export default Navbar;
