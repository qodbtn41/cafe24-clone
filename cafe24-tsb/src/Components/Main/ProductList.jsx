import React from 'react';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';
import './ProductList.scss';


const ProductList = () => {
  return (
    <div>
      <ProductSearch></ProductSearch>
      <div className='product_list'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default ProductList;