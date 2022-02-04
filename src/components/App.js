import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './footer/index';
import './App.css';
import Header from './Header';
import About from '../pages/about';
import Home from '../pages/home';
import Contact from '../pages/contact';
import Allitem from '../pages/allitem';

import CPU from '../pages/products/cpu';
import Prebuilt from '../pages/products/prebuilt';
import Cart from '../pages/products/cart';

import Main from '../../src/pages/form/Main';

import Context from '../pages/products/context';


function App() {

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [succ, setSucc] = useState(false);

  return (
    <Router>

      <div>
        <Header />
        {/** routing pages:
         * home
         * about
         * allitem
         * ...
         */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} /> 
          <Route path='/allitem' exact element={<Allitem />} />
          {/**
           * cpu page
           * prebuilt page
           * ...
           */} 
          <Route path='/cpu' exact element={<CPU cartItems={cartItems} setCartItems={setCartItems} total={total} setTotal={setTotal} />} /> 
          <Route path='/prebuilt' exact element={<Prebuilt />} />

          <Route path='/cart' exact element={<Cart cartItems={cartItems} setCartItems={setCartItems} total={total} setTotal={setTotal} />} />
          <Route path='/context' exact element={<Context setCartItems={setCartItems} />} />

          <Route path='/Main' exact element={<Main />} />
          
        </Routes>
        {/*<Footer />*/} 
        <Footer />
      </div>

    </Router>
  );
}

export default App;
