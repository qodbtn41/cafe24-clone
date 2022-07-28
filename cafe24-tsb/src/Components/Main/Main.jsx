import React, { useState } from 'react';
import Carousel from '../Common/Carousel';
import Header from '../Common/Header';
import ProductList from './ProductList';

const Main = () => {

  return (
        <>
            <Header></Header>
            <Carousel></Carousel>
            <ProductList></ProductList>
        </>
    );
};

export default Main;