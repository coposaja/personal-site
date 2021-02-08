import React from 'react';

import './Technology.scss';
import { Column, TechIcon } from '../../shared';
import {
  javascriptImg,
  reactImg,
  sassImg,
  dotnetImg,
  gitImg,
  nodeImg,
  typescriptImg
} from '../../../assets/images';


const Technology = () => {
  const theme = 'light';

  return (
    <div className={`technology--container ${theme}`} id="technology">
      <div className="technology--wrapper">
        <h1>Related Techs</h1>

        <div className="technology--content">
          <div className="technology--row first">
            <Column lg={4} md={6} sm={6}>
              <TechIcon imageSrc={javascriptImg} />
            </Column>
            <Column lg={4} md={6} sm={6}>
              <TechIcon imageSrc={sassImg} />
            </Column>
            <Column lg={4} md={12} sm={12}>
              <TechIcon imageSrc={reactImg} />
            </Column>
          </div>

          <div className="technology--row second">
            <Column lg={3} md={6} sm={12}>
              <TechIcon imageSrc={nodeImg} />
            </Column>
            <Column lg={3} md={6} sm={4}>
              <TechIcon imageSrc={dotnetImg} />
            </Column>
            <Column lg={3} md={6} sm={4}>
              <TechIcon imageSrc={typescriptImg} />
            </Column>
            <Column lg={3} md={6} sm={4}>
              <TechIcon imageSrc={gitImg} />
            </Column>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology;
