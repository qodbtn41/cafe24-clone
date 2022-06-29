import React from 'react';
import './ProductCard.scss';

const ProductCard = () => {
  return (
    <div className='product_card'>
      <img src='/src/Resource/Image/ProductCardImageSample01.png' width={300} height={100}/>
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
        <div className='product_card_footer'>
          <i>하트</i>
          <div>SAMPLE</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;