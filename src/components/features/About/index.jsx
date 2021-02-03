import React from 'react';
import { FaBullseye, FaHandshake, FaStaylinked } from 'react-icons/fa';
import { GiFist } from 'react-icons/gi';

import './About.scss';
import { Card, Column, Octagon } from '../../shared';

const About = () => {
  return (
    <div className="about--container" id="about-me">
      <div className="about--wrapper">
        <h1>About Me</h1>
        <div className="about--badges">
          <Column lg={3} md={6} sm={12}>
            <Card>
              <Octagon>
                <FaBullseye />
              </Octagon>
              <h2>Focus</h2>
              <p>Focus on serving only the best from me</p>
            </Card>
          </Column>
          <Column lg={3} md={6} sm={12}>
            <Card>
              <Octagon>
                <FaHandshake />
              </Octagon>
              <h2>Commitment</h2>
              <p>Commited to every task I do</p>
            </Card>
          </Column>
          <Column lg={3} md={6} sm={12}>
            <Card>
              <Octagon>
                <FaStaylinked />
              </Octagon>
              <h2>Persistent</h2>
              <p>Hard is hard. But nothing is impossible</p>
            </Card>
          </Column>
          <Column lg={3} md={6} sm={12}>
            <Card>
              <Octagon>
                <GiFist />
              </Octagon>
              <h2>Determination</h2>
              <p>Victory only come when you never stop</p>
            </Card>
          </Column>
        </div>
      </div>
    </div>
  )
}

export default About;
