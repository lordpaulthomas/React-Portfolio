import React from 'react';
import github from './../../images/github.png';
import linkedin from './../../images/linkedin.png';
import soundCloud from './../../images/soundCloud.png';
import './style.css';
const Footer = () => {
  return (
    <div className="text-light border border-dark bg-light">
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center">
          <div className="pt-3 ">
            © 2019 Copyright: Paul Thomas
          </div>
          <a id="foot_link" href="https://github.com/lordpaulthomas">
            {' '}
            <img width="40px" height="40px" src={github} alt="Github" />{' '}
          </a>
          <a
            id="foot_link"
            href="https://www.linkedin.com/in/paul-thomas-b0409871/"
          >
            {' '}
            <img
              src={linkedin}
              width="38px"
              height="40px"
              alt="LinkedIn"
            />{' '}
          </a>
          <a id="foot_link" className="pr-3" href="https://soundcloud.com/ptgc">
            {' '}
            <img
              src={soundCloud}
              width="40px"
              height="40px"
              alt="SoundCloud"
            />{' '}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
