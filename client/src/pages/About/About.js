import React from 'react';
import Slider from 'react-animated-slider';
import Navbar from './../../components/NavBar';
import Footer from './../../components/Footer';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './style.css';
import paulPicOne from './../../images/paulPic.jpeg';
import paulPicTwo from './../../images/goodcharlotte_header1.jpg';
import paulPicThree from './../../images/photoPaulFire.JPG';



const content = [
  {
    title: 'Musician and Engineer',
    description:
      `Hello my name is Paul Thomas.  For the past twenty years I have been touring around the world playing music.`,
    image: paulPicOne,
  },
  {
    title: 'My Band',
    description:
      `Who knew the band I started in high school would go on to have global sales of over 11 million albums!`,
    button: 'Discover',
    image: paulPicTwo,
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png'
  },
  {
    title: 'Priceless',
    description: `Getting to experience different cultures and connecting with people through music has blessed me with a rare global education that few possess.`,
    button: 'Buy now',
    image: paulPicThree,
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png'
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
          style={{ background: `url('${item.image}')`, backgroundPosition: 'center'  }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <h3 className="text-light">{item.description}</h3>
          </div>
        </div>
      ))}
    </Slider>
    <Footer />
  </div>
);

export default About;