import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Components/Main/Main'
import SignUp from './Components/Signup/SignUp';
import Products from './Components/Products/Products';
import Login from './Components/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Main/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/signup' element= {<SignUp/>}/>
        <Route path='/product' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
