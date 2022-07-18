import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import './Carousel.scss';
import Slide from './Slide';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const carouselImages = [
  require('../../Resource/Image/Carousel_Image01.png'),
  require('../../Resource/Image/Carousel_Image02.png'),
  require('../../Resource/Image/Carousel_Image03.png'),
  require('../../Resource/Image/Carousel_Image04.png'),
  require('../../Resource/Image/Carousel_Image05.png'),
  require('../../Resource/Image/Carousel_Image06.png'),
  require('../../Resource/Image/Carousel_Image07.png'),
  require('../../Resource/Image/Carousel_Image08.png'),
  require('../../Resource/Image/Carousel_Image09.png')
];


const Carousel = () => {
  const slideCount = carouselImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const NextSlide = ()=>{
    if (currentSlide >= slideCount - 1) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const PrevSlide = ()=>{
    if (currentSlide === 0) {
      setCurrentSlide(slideCount - 1); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <div className='carousel'>
      <div className='carousel_Images' ref={slideRef}>
        {carouselImages.map((image, idx) => <Slide key={idx} image={image}/>)}
      </div>
      <div className='carousel_buttons'>
        <div className='carousel_button_left' onClick={PrevSlide} >
          <FontAwesomeIcon icon={faAngleLeft}/>
        </div>
        <div className='carousel_button_right' onClick={NextSlide}>
          <FontAwesomeIcon icon={faAngleRight}/>
        </div>
      </div>
    </div>
  );
};

export default Carousel;