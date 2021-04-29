import React from 'react';
import CardItem from './CardItem';
import '../../App.css';
import './Cards.css';
import FMB from '../../images/frontendmasters-bootcamp.jpg';
import FCC from '../../images/freecodecamp.png';
import image3 from '../../images/img-3.jpg';
import image4 from '../../images/img-4.jpg';
import image8 from '../../images/img-8.jpg';
import { motion } from 'framer-motion';
import useScrollPosition from '@react-hook/window-scroll';

function Cards() {
  const scrollY = useScrollPosition(60 /*fps*/);
  return (
    <div className='cards'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 400 ? 1 : 0 }}
        transition={{ duration: 1 }}>
        Check out these EPIC Destinations!
      </motion.h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <motion.ul
            className='cards__items'
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollY > 600 ? 1 : 0 }}
            transition={{ duration: 1 }}>
            <CardItem
              src={FMB}
              text='Review my work in the FrontEnd Masters Bootcamp!'
              label='Coursework'
              path='/frontend-masters-bootcamp'
            />
            <CardItem
              src={FCC}
              text='Check out my certifications from freeCodeCamp.org!'
              label='Courswork'
              path='/freecodecamp'
            />
          </motion.ul>
          <motion.ul
            className='cards__items'
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollY > 800 ? 1 : 0 }}
            transition={{ duration: 1 }}>
            <CardItem
              src={image3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={image4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={image8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
