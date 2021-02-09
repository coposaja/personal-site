import React, { useContext } from 'react';

import './Hero.scss';
import darkBgUrl from '../../../assets/videos/darkBg.mp4';
import lightBgUrl from '../../../assets/videos/lightBg.mp4';
import { Button } from '../../shared';
import { ThemeContext } from '../../../context';

const Hero = () => {
  const [theme,] = useContext(ThemeContext);

  return (
    <div className={`hero--wrapper ${theme}`} id="home">
      <video src={theme === 'light' ? lightBgUrl : darkBgUrl} autoPlay loop muted />
      <div className="hero--content">
        <h1>I'm <span>Yohanzen C. Alexander</span> a Software Engineer</h1>
        <Button
          type="outline"
          color="light"
          size="small"
        >
          About Me
        </Button>
      </div>
    </div>
  )
}

export default Hero;
