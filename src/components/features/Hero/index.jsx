import React from 'react';

import './Hero.scss';
import backgroundUrl from '../../../assets/videos/background.mp4';
import { Button } from '../../shared';

const Hero = () => {
  return (
    <div className="hero--wrapper">
      <video src={backgroundUrl} autoPlay loop muted />
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
