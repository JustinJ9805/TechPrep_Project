import React from 'react'
import './Cart.css'

function Cart(props){
    return(
        <div className='container-fluid'>
            <br></br>
            <h1>Shopping Cart</h1>
            <div className='row'>
                <div className='col-8'></div>
                    <div className='row entry'>
                        <img className='col-3' src = {props.imageLink} alt='not found'></img>
                        <h3 className='col-1'>{props.productName}NAME</h3>
                        <h3 className='col-1'>{props.price}PRICE</h3>
                        <select className='col-1'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        <button className='col-2'>Remove from Cart</button>
                        <button className='col-2'>Save for Later</button>
                    </div>
                    <div className='col-4'></div>
                




            </div>
            
        </div>
        
    )
}

export default Cart; 