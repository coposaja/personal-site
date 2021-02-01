import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

import './WhoAmI.scss';
import profileSrc from '../../../assets/images/profile.svg';
import { Button, Column } from '../../shared';

const WhoAmI = () => {
  return (
    <div className="whoami--container">
      <div className="whoami--wrapper">
        <h1>Who's This Guy?</h1>
        <div className="whoami--content">
          <Column lg={6} md={12}>
            <img src={profileSrc} alt="Profile" />
            <div className="whoami--bio">
              <p>
                I'm a Software Engineer in Indonesia. I have a serious passion for developing, designing, and creating applications.
              </p>
              <Button
                type="link"
                color="primary"
              >
                Let's make something special
              </Button>
            </div>
          </Column>
          <Column lg={6} md={12}>
            <div className="experience--card">
              <div className="experience--logo">
                <FaBriefcase />
              </div>
              <div className="experience--detail">
                <h2>Software Engineer</h2>
                <h3>at Bina Nusantara IT Division</h3>
                <p>2017 - Current</p>
              </div>
            </div>
            <div className="experience--card">
              <div className="experience--logo">
                <FaGraduationCap />
              </div>
              <div className="experience--detail">
                <h2>Computer Science</h2>
                <h3>at Bina Nusantara University</h3>
                <p>2016 - 2020</p>
              </div>
            </div>
          </Column>
        </div>
      </div>
    </div>
  )
}

export default WhoAmI;
