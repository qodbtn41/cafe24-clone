import React from 'react';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';
import './ProductList.scss';


const ProductList = () => {

  const sampleImage01 = require('../../Resource/Image/ProductCardImageSample01.png');
  const sampleImage02 = require('../../Resource/Image/ProductCardImageSample02.jpg');
  const sampleImage03 = require('../../Resource/Image/ProductCardImageSample03.jpg');
  const sampleImage04 = require('../../Resource/Image/ProductCardImageSample04.jpg');
  const sampleImage05 = require('../../Resource/Image/ProductCardImageSample05.jpg');
  const sampleImage06 = require('../../Resource/Image/ProductCardImageSample06.jpg');
  const sampleImage07 = require('../../Resource/Image/ProductCardImageSample07.jpg');
  const sampleImage08 = require('../../Resource/Image/ProductCardImageSample08.jpg');



  return (
    <div>
      <ProductSearch></ProductSearch>
      <div className='product_list'>
        <ProductCard img={sampleImage01}></ProductCard>
        <ProductCard img={sampleImage02}></ProductCard>
        <ProductCard img={sampleImage03}></ProductCard>
        <ProductCard img={sampleImage04}></ProductCard>
        <ProductCard img={sampleImage05}></ProductCard>
        <ProductCard img={sampleImage06}></ProductCard>
        <ProductCard img={sampleImage07}></ProductCard>
        <ProductCard img={sampleImage08}></ProductCard>
        <ProductCard img={sampleImage01}></ProductCard>
        <ProductCard img={sampleImage02}></ProductCard>
        <ProductCard img={sampleImage03}></ProductCard>
        <ProductCard img={sampleImage04}></ProductCard>
        <ProductCard img={sampleImage05}></ProductCard>
        <ProductCard img={sampleImage06}></ProductCard>
        <ProductCard img={sampleImage07}></ProductCard>
        <ProductCard img={sampleImage08}></ProductCard>
      </div>
    </div>
  );
};

export default ProductList;