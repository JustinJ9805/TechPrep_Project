import React from 'react'; 
import './App.css';
import Books from './Books.js';
import Cart from './Cart.js';
import Main from './Main';
import FilterBar from './FilterBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AboutUs from './aboutUs/aboutUs.js';
import Footer from './Footer';
import Header from './Header';
import CreateListing from './CreateListing';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <Header/>
      <br></br>
      <br></br>
      <br></br>

      
      
      <Routes>
        <Route path='/Main' element={<div> <FilterBar/> <br></br> <Main/> </div>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/results' element={<Books/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/createListing' element={<CreateListing/>}/>
        <Route path='*' element={<Main/>}/> 
      </Routes>
      <Footer/>
    </Router>

   
    
  );
}

export default App;
