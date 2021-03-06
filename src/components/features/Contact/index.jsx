import React from 'react';

import './Contact.scss';
import { Button } from '../../shared';

const Contact = () => {
  return (
    <div className="contact--container" id="contact">
      <div className="contact--wrapper">
        <h1>Let's Create Something Great!</h1>
        <p>
          If you like my work and have some cool projects to work on, just send me a direct message or contact me through the social sites listed below.
        </p>

        <div className="button-wrapper">
          <Button
            type="outline"
            color="light"
            component="link"
            goTo="mailto:yohanzen.alexander@gmail.com"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Contact;
