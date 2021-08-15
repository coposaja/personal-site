import React from 'react';
import { FaLinkedin, FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer--wrapper">
        <div className="social--badges">
          <a href="https://www.linkedin.com/in/yohanzen-christanto-alexander-6054a0153/" rel="noreferrer" target="_blank" className="socmed linkedin">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/coposaja" rel="noreferrer" target="_blank" className="socmed github">
            <FaGithub />
          </a>
          <a href="http://bit.ly/telegram-greeting" rel="noreferrer" target="_blank" className="socmed telegram">
            <FaTelegram />
          </a>
          <a href="http://bit.ly/whatsapp-greeting" rel="noreferrer" target="_blank" className="socmed whatsapp">
            <FaWhatsapp />
          </a>
        </div>
        <p>
          Yohanzen Christanto Alexander
          <span className="non-mobile"> - </span>
          <span className="copyright">©{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer;
