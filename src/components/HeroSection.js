import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../videos/video-1.mp4';
import { motion } from 'framer-motion';

function HeroSection() {
  const [isImageBackground, setImageBackground] = useState('true');
  const handleToggle = () => {
    setImageBackground(!isImageBackground);
  };

  return (
    <div>
      <div className='toggle'>
        <button onClick={handleToggle}>
          {isImageBackground ? 'Video' : 'Image'}
        </button>
      </div>
      <div
        className={
          isImageBackground
            ? 'hero-container'
            : 'hero-container remove-background'
        }>
        <video src={video} autoPlay loop muted />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          ADVENTURE AWAITS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}>
          What are you waiting for?
        </motion.p>
        <motion.div
          className='hero-btns'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            GET STARTED
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
export default HeroSection;
