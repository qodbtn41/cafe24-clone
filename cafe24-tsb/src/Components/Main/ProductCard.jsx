import React, { useState } from 'react';
import './ProductCard.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({item}) => {
  const [isHovering, setIsHovering] = useState(false);
  

  return (
    <div className='product_card'
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}>
      <div className='product_image'>
        <img src={item.image} alt='제품 이미지'/>
        <div className={isHovering?'hover':''}></div>
      </div>
      <div className='product_contents'>
        <div className='product_tags'>
          {item.tags.map((t)=><div>{t}</div>)}
        </div>
        <div>
          <div className='product_name'>{item.title}</div>
          <div className='product_price'>{item.price}원</div>
        </div>
        <div className={isHovering?'product_card_footer hover':'product_card_footer'}>
          <FontAwesomeIcon icon={faHeart}/>
          <div>SAMPLE <FontAwesomeIcon icon={faAngleRight} /></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;