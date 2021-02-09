import React, { useContext } from 'react';
import { FaMoon } from 'react-icons/fa';

import './ThemeChanger.scss';
import { ThemeContext } from '../../../context/ThemeContext';

const ThemeChanger = () => {
  const [theme, themeToggle] = useContext(ThemeContext);

  return (
    <div
      className={`theme-changer--wrapper ${theme === 'light' ? '' : 'active'}`}
      onClick={themeToggle}
    >
      <div className="slider">
        <div className="icon--wrapper">
          <FaMoon />
        </div>
      </div>
    </div>
  )
}

export default ThemeChanger;
