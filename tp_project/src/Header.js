import './Header.css'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Header(){

    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2,setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return(
            <div className='container-fluid header'>
                <div className='header_content'>
                    <a className='col-1' href='/main'><img src={'icon.png'} alt='icon' className='header_icon'></img></a>
                    
                    <button className='col-1 header_signIn' onClick={handleShow}>Account</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Sign In Below</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            You can browse without signing in - once you are ready to checkout you will need to make an account!
                            <input type={'text'} name={'username'} placeholder={'Username'}></input>
                            <br></br>
                            <input type={'password'} name={'password'} placeholder={'Password'}></input>
                        </Modal.Body>
                        <Modal.Footer>
                            <a href={'./SignUp'}><Button onClick={handleClose}>Sign Up</Button></a>
                            <Button onClick={handleClose}>Sign In</Button>
                            <Button onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    
                    <input className='col-4 header_searchBar' type={'text'} placeholder=' search'></input>
                    
                    <button onClick={handleShow2} className='createListing'>Create a Listing</button>
                    <Modal show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create a Listing</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                             What are you listing?
                             <br></br>
                            <input type={'text'} name={'item'} placeholder={'Item...'}></input>
                            <br></br>
                            What are you looking to do?
                            <br></br>
                            <select>
                                <option>Sell it</option>
                                <option>Loan it out</option>
                            </select>
                            <br></br>
                            If selling, price? If loaning, price for 6 months?
                            <input type={'text'} placeholder='Price...'/>
                            <br></br>
                            Upload picture of item
                            <input type={'file'}></input>
                            <br></br>
                            <br></br>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleClose}>Create Listing</Button>
                            <Button onClick={handleClose}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>

                    <button className='header_button col-2'>Orders/Returns</button>
                    <a className='col-1' href='/cart'><img className='header_cart' src={'cart.png'} alt='cart'></img></a>
                </div>
                
            </div>
    )
}

export default Header