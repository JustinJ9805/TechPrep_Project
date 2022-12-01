import React from 'react'
import { Modal } from 'react-bootstrap';
import './Cart.css'
import PayPal from './PayPal.js'


function Cart(props){
    return(
        <div className='container-fluid'>
            <br></br>
            <h1>Shopping Cart</h1>
            <div className='row d-flex entry'>
                <img className='col-2' src='' alt='unable to load'></img>
                <h5 className='col-2'>Name</h5>
                <h5 className='col-2'>Price</h5>
                
                <button className='col-2 cart_button1'>Remove from Cart</button>
                <button className='col-2 cart_button2'>Save for Later</button>
                
            </div>

            <div className='cart_total row'>
                    <h5>Pre-Tax Total</h5>
                    <h5>Tax</h5>
                    <h5>Total</h5>
                    <PayPal/>
                    
                    
            </div>

            

            <br></br>
            <br></br>
            <div className='Saved'>
                <h1>Saved for Later</h1>
                <div className='row d-flex entry'>
                    <img className='col-2' src='' alt='unable to load'></img>
                    <h5 className='col-2'>Name</h5>
                    <h5 className='col-2'>Price</h5>
                    
                    <button className='col-2 cart_button1'>Move to Cart</button>
                    <button className='col-2 cart_button2'>Delete</button>
                
                </div>


            </div>
            
        </div>
        
    )
}

export default Cart; 