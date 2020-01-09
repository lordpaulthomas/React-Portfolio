import React from 'react';
import Slider from 'react-animated-slider';
import Navbar from './../../components/NavBar';
import Footer from './../../components/Footer';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './style.css';
import paulPicOne from './../../images/paulPic.jpeg';
import paulPicTwo from './../../images/goodcharlotte_header1.jpg';
import studio from './../../images/studio.jpg';



const content = [
  {
    title: 'Engineer',
    description:
      `Innovative Full Stack Developer with a background in the music industry and studio engineering. Experienced in producing dynamic applications with React, Redux, Node, MySQL and Mongodb. Proficient in Web Scraping, RESTful APIs, Google Analytics and ESP integration. Passionate about learning new technologies, collaborating, and efficiently executing projects. `,
    image: paulPicOne,
  },
  {
    title: 'Musician',
    description:
      `Who knew the band I started in high school would go on to have global sales of over 11 million albums!`,
    button: 'Discover',
    image: paulPicTwo,
  },
  {
    title: 'Student',
    description: `In between tours I attended college where I studied Music, Mathematics and Computer Science.`,
    image: studio,
  },
  {
    title: 'Family Man',
    description: `I love exploring the world with my family.  We enjoy going to art museums, camping, skiing and traveling.`,
    image: 'https://media.giphy.com/media/U2F6RQwR454gSegBJy/giphy.gif'
  }
];

const About = () => (
  <div>
    <Navbar />
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content "
          style={{ background: `url('${item.image}')`, backgroundPosition: 'center', backgroundSize: 'contain' }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <h3 id="text" style={{margin: 'auto', marginTop: '1em'}}className="col-6 text-light">{item.description}</h3>
          </div>
        </div>
      ))}
    </Slider>
    <Footer />
  </div>
);

export default About;