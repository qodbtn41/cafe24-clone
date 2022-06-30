import React, { useState } from 'react';
import './ProductCard.scss';
import sampleImage from '../../Resource/Image/ProductCardImageSample01.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ProductCard = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className='product_card'
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}>
      <div className='product_image'>
        <img src={sampleImage} alt='제품 이미지'/>
        <div className={isHovering?'hover':''}></div>
      </div>
      <div>
        <div className='product_tags'>
          <div>PC</div>
          <div>Mobile</div>
          <div>안전거래</div>
        </div>
        <div>
          <div>베이직_모바일무료</div>
          <div>150,000원</div>
        </div>
        <div className={isHovering?'product_card_footer hover':'product_card_footer'}>
          <FontAwesomeIcon icon={faHeart}/>
          <div>SAMPLE</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;