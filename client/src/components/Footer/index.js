import React from "react";
import github from "./../../images/github.png";
import twitter from './../../images/twitter.png';
import linkedin from './../../images/linkedin.png';
import soundCloud from './../../images/soundCloud.png';
const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center">
          <i id="cog" className="fa fa-cog fa-pulse fa-2x pl-2" aria-hidden="true">
          </i> 
          <a id="foot_link" className="pl-3 color-primary" href="www.goodcharlotte.com">   </a> © 2019 Copyright: Paul Thomas  
          <a id="foot_link" href="https://github.com/lordpaulthomas">   <img width="40px" height="40px" src={github} alt="Github"/>  </a>
          <a id="foot_link" href="https://www.linkedin.com/in/paul-thomas-b0409871/">  <img src={linkedin} width="38px" height="40px" alt="LinkedIn"/> </a>
          <a id="foot_link" href="https://twitter.com/BigPaulThomas">  <img src={twitter} width="40px" height="38px" alt="twitter"/>  </a>
          <a id="foot_link" className="pr-3"href="https://soundcloud.com/ptgc">  <img src={soundCloud} width="40px" height="40px" alt="SoundCloud"/>    </a>
          </div>
      </footer>
    </div>
  )
};

export default Footer;