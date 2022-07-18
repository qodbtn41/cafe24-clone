import React from 'react';
import './Slide.scss'

const Slide = ({image}) => {
  return (
  <div className='slide'>
    <img src={image} alt="이미지"/>
  </div>
  );
};

export default Slide;
