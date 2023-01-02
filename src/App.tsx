import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Magasin from './pages/Magasin';
import Apropos from './pages/Apropos';
import {  Container } from 'react-bootstrap';
import { ShoppingProvider } from './context/Shopping';
import Navbar from './component/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Location from './pages/Location';


function App() {
  return (
   <>
    <ShoppingProvider>
    
    <Container className='mb-4'>    
   <BrowserRouter>
  
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/magasin' element={<Magasin/>}/>
    <Route path='/apropos' element={<Apropos/>}/>
    <Route path='/location' element={<Location/>}/>

   </Routes>
   </BrowserRouter>
    </Container>
    </ShoppingProvider>
    </> 
  );
}

export default App;
