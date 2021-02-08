import React from 'react';
import { FaMoon } from 'react-icons/fa';

import './ThemeChanger.scss';

const ThemeChanger = () => {
  return (
    <div className="theme-changer--wrapper">
      <div className="slider">
        <div className="icon--wrapper">
          <FaMoon />
        </div>
      </div>
    </div>
  )
}

export default ThemeChanger;
