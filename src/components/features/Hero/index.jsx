import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import './Hero.scss';
import { Button } from '../../shared';
import { ThemeContext } from '../../../context';
import { cdnAsset } from '../../../utils';

const Hero = () => {
  const [theme,] = useContext(ThemeContext);

  return (
    <div className={`hero--wrapper ${theme}`} id="home">
      <video src={cdnAsset(theme === 'light' ? 'lightBg.mp4' : 'darkBg.mp4')} autoPlay loop muted />
      <div className="hero--content">
        <h1>I'm <span>Yohanzen C. Alexander</span> a Software Engineer</h1>
        <Button
          type="outline"
          color="light"
          size="small"
          component="link-scroll"
          goTo="about-me"
        >
          About Me
          <FaArrowRight />
        </Button>
      </div>
    </div>
  )
}

export default Hero;
