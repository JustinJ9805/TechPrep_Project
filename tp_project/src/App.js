import React from 'react'; 
import './App.css';
import Books from './Books.js';
import Cart from './Cart.js';
import Main from './Main';
import Navbar from './component/Navbar/Navbar.js'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Paypal from './PayPal'

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/results' element={<Books/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/cart' element={<Cart/>}/>

        <Route path='*' element={<Main/>}/> 
      </Routes>
    </Router>
    // <div>
    //   <Navbar/>
      
    //   <SignIn/>
    //   <SignUp/>
    //   <Books/>
    //   <Paypal/>
    // </div>
    
  );
}

export default App;
