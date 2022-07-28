import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';
import DataGrid from 'react-data-grid';
import './ProductList.scss';


const ProductList = () => {
  const [displayType, setDisplayType] = useState("card");

  const sampleImage01 = require('../../Resource/Image/ProductCardImageSample01.png');
  const sampleImage02 = require('../../Resource/Image/ProductCardImageSample02.jpg');
  const sampleImage03 = require('../../Resource/Image/ProductCardImageSample03.jpg');
  const sampleImage04 = require('../../Resource/Image/ProductCardImageSample04.jpg');
  const sampleImage05 = require('../../Resource/Image/ProductCardImageSample05.jpg');
  const sampleImage06 = require('../../Resource/Image/ProductCardImageSample06.jpg');
  const sampleImage07 = require('../../Resource/Image/ProductCardImageSample07.jpg');
  const sampleImage08 = require('../../Resource/Image/ProductCardImageSample08.jpg');


  if(displayType === 'card'){
    return (
      <div>
        <ProductSearch displayType={displayType} setDisplayType={setDisplayType}></ProductSearch>
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
  }
  else if(displayType === 'ag-grid'){
    return (
      <div>
        <ProductSearch displayType={displayType} setDisplayType={setDisplayType}></ProductSearch>
        <div className='product_list'>
        </div>
      </div>
    );

  }
  else if(displayType === 'react-data-grid'){
    const columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' }
    ];
    
    const rows = [
      { id: 0, title: 'Example' },
      { id: 1, title: 'Demo' }
    ];
    return (
      <div>
        <ProductSearch displayType={displayType} setDisplayType={setDisplayType}></ProductSearch>
        <DataGrid columns={columns} rows={rows} />;
      </div>
    );
    
  }
  else if(displayType === 'tanstack'){
    return (
      <div>
        <ProductSearch displayType={displayType} setDisplayType={setDisplayType}></ProductSearch>
        <div className='product_list'>
        </div>
      </div>
    );
  }

};

export default ProductList;