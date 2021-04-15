import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './Accordion.css';

const Accordion = ({ icon, text, content }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    if (clicked) {
      return setClicked(false);
    }
    setClicked(true);
  };

  content = content.map((item) => {
    return (
      <a
        href={item.path}
        className='contentItem'
        target='_blank'
        rel='noreferrer'>
        <div className='contentImage'>
          <img src={item.image} alt='preview' />
        </div>
        <p>{item.text}</p>
      </a>
    );
  });

  return (
    <div className='accordian'>
      <div className='accordianHeading' onClick={toggle}>
        <div className='container'>
          <h2>{icon}</h2>
          <h1>{text}</h1>
          <span>{clicked ? <FiMinus /> : <FiPlus />}</span>
        </div>
      </div>
      <div
        className={clicked ? 'content show' : 'content'}
        style={
          clicked ? { height: (200 * content.length) / 2 } : { height: '0px' }
        }>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
