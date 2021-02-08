import React from 'react';
import { FaBullseye, FaHandshake, FaStaylinked } from 'react-icons/fa';
import { GiFist } from 'react-icons/gi';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

import './About.scss';
import { profileImg } from '../../../assets/images';
import { Card, Button, Column, Octagon } from '../../shared';

const About = () => {
  const theme = 'light';
  return (
    <div className={`about--container ${theme}`} id="about-me">
      <div className="about--wrapper">
        <h1>About Me</h1>
        <div className="about--badges">
          <Column lg={3} md={6} sm={12}>
            <Card theme={theme}>
              <Octagon>
                <FaBullseye />
              </Octagon>
              <h2>Focus</h2>
              <p>Focus on serving only the best from me</p>
            </Card>
          </Column>
          <Column lg={3} md={6} sm={12}>
            <Card theme={theme}>
              <Octagon>
                <FaHandshake />
              </Octagon>
              <h2>Commitment</h2>
              <p>Commited to every task I do</p>
            </Card>
          </Column>
          <Column lg={3} md={6} sm={12}>
            <Card theme={theme}>
              <Octagon>
                <FaStaylinked />
              </Octagon>
              <h2>Persistent</h2>
              <p>Hard is hard. But nothing is impossible</p>
            </Card>
          </Column>
          <Column lg={3} md={6} sm={12}>
            <Card theme={theme}>
              <Octagon>
                <GiFist />
              </Octagon>
              <h2>Determination</h2>
              <p>Victory only come when you never stop</p>
            </Card>
          </Column>
        </div>
      </div>
      <div className="whoami--content">
        <Column lg={6} md={12}>
          <img src={profileImg} alt="Profile" />
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
  )
}

export default About;
