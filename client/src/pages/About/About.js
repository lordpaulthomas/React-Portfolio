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
import family from './../../images/family.jpeg';



const content = [
  {
    title: 'Musician and Engineer',
    description:
      `Hello my name is Paul Thomas.  I am from Waldorf, MD.  A small town outside of Washington D.C.`,
    image: paulPicOne,
  },
  {
    title: 'My Band',
    description:
      `Who knew the band I started in high school would go on to have global sales of over 11 million albums!`,
    button: 'Discover',
    image: paulPicTwo,
  },
  {
    title: 'Tech',
    description: `I have always been intrigued by technology, so I studied audio engineering so I could make music`,
    image: studio,
  },
  {
    title: 'Family',
    description: `Now I am trying to spend more time with these guys.  Working closer to home making connections with people around the world with a new medium`,
    image: family,
  }
];

const About = () => (
  <div>
    <Navbar />
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <h3 style={{margin: 'auto', marginTop: '1em'}}className="text-light col-6">{item.description}</h3>
          </div>
        </div>
      ))}
    </Slider>
    <Footer />
  </div>
);

export default About;