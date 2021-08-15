import React, { useContext } from 'react';

import './Technology.scss';
import { Column, TechIcon } from '../../shared';
import { ThemeContext } from '../../../context';
import { cdnAsset } from '../../../utils';

const Technology = () => {
  const [theme,] = useContext(ThemeContext);

  return (
    <div className={`technology--container ${theme}`} id="technology">
      <div className="technology--wrapper">
        <h1>Related Techs</h1>

        <div className="technology--content">
          <div className="technology--row odd">
            <Column lg={4} md={6} sm={6}>
              <TechIcon imageSrc={cdnAsset('react.svg')} />
            </Column>
            <Column lg={4} md={6} sm={6}>
              <TechIcon imageSrc={cdnAsset('java.svg')} />
            </Column>
            <Column lg={4} md={12} sm={12}>
              <TechIcon imageSrc={cdnAsset('spring.svg')} />
            </Column>
          </div>

          <div className="technology--row even">
            <Column lg={3} md={6} sm={12}>
              <TechIcon imageSrc={cdnAsset('javascript.svg')} />
            </Column>
            <Column lg={3} md={6} sm={4}>
              <TechIcon imageSrc={cdnAsset('dotnet.svg')} />
            </Column>
            <Column lg={3} md={6} sm={4}>
              <TechIcon imageSrc={cdnAsset('typescript.svg')} />
            </Column>
            <Column lg={3} md={6} sm={4}>
              <TechIcon imageSrc={cdnAsset('git.svg')} />
            </Column>
          </div>

          <div className="technology--row odd">
            <Column lg={6} md={6} sm={6}>
              <TechIcon imageSrc={cdnAsset('node.svg')} />
            </Column>
            <Column lg={6} md={6} sm={6}>
              <TechIcon imageSrc={cdnAsset('sass.svg')} />
            </Column>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology;
