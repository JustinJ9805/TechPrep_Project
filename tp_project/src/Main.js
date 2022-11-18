import React from 'react'
import './Main/Main.css'
import seller from './Main/seller_pic.png'
import buyer from './Main/buyer_pic.png'

import logoReact from './Main/react_logo.png'
import logoPostgresql from './Main/postgresql_logo.png'
import logoBootstrap from './Main/bootstrap_logo.png'

import {Routes, Route, useNavigate} from 'react-router-dom';


function Main(){

    const navigate = useNavigate();

    const navigateToSignUp = () => {
        navigate('/signUp')
    }

    const navigateToShop = () => {
        navigate('/books')
    }

    return(
        <div className='container-fluid'>
            <div className='content'>
                <br></br>
                <br></br>
                <h2 className='row d-flex justify-content-center aboutUs'>About Us</h2>
                <h4>
                    Turn the Page was created as a marketplace for students to sell their school related materials they no longer have any use for. 
                    Chances are after organic chemistry, you dont need those modeling kits and after you finish just about any course, you wont open that textbook ever again.
                    So, instead of letting it sit on a shelf collecting dust, you can sell it to another college student who actually needs it. 
                    <br></br><br></br>
                    
                    There are a lot of reasons to buy used- namely, its cheaper, increases the items lifespan and its better for the environment. Our platform  
                    not only allows students to sell their used materials and notes but also allows bookstores and authorized sellers to sell their merchandise
                    directly to students as well.
                    <br></br><br></br>
                    We hope you enjoy using this site we created! To get started, simply make an account!
                    <br></br>
                </h4>
                <br></br>

                <div className='row buySell d-flex justify-content-center'>
                    <div className='sellers col-5'>
                        <img className=' main_img col-12 d-flex justify-content-center' src={seller} alt='not found' height={350} ></img>
                        <h5>For Sellers</h5>
                        <h3>Reach new customers and grow your business!</h3>
                        <p>We make it easy for you to to sell directly to consumers. Simply make an account
                            and you can start creating listings. We take care of everything so you can have peace of mind. 
                        </p>
                        <button onClick={navigateToSignUp}>Lets Go!</button>
                    </div>
                    <div className='buyers col-5'>
                        <img className=' main_img col-12 d-flex justify-content-center' src={buyer} alt='not found' height={350}></img>
                        <h5>For Buyers</h5>
                        <h3>Browse our listings and find what your searching for!</h3>
                        <p>We keep our prices are transparent as possible. You can begin browsing without an account. </p>
                        <br></br>
                        <button onClick={navigateToShop}>Lets Go!</button>
                    </div>
                    <br></br>
                </div>
                <br></br>

                {/* <div className='row searchBar'>
                    <input type='text' placeholder='search...'></input>
                </div>
                <br></br> */}

                <div className='tech'>
                    {/* include tags for links to webpages  */}
                    <h3 className='d-flex justify-content-center'>Our Tech Stack</h3>
                    <h5>Our webpage was built using:</h5>
                    <br></br>
                    <ul className='row'>
                        <li className='col-3'>
                            <a href='https://reactjs.org' target='_blank' rel='noreferrer'><img className=' main_img' src={logoReact} alt='import' height={150}></img></a>
                            <br></br>
                            React.js - our frontend framework, react allows us to qickly and efficiently design 
                            beautiful and seemless web pages
                        </li>
                        <li className='col-3'>
                            <a href='https://getbootstrap.com' target='_blank' rel='noreferrer'> <img className='main_img' src={logoBootstrap} alt='import' height={150}></img></a>
                            <br></br>
                            Bootstrap - a front end toolkit -geared towards mobile first development with a powerful, 
                            prebuilt grid system that allows us to customize the layout of our pages. 
                        </li>
                        <li className='col-3'>
                        <a href='https://getbootstrap.com' target='_blank' rel='noreferrer'> <img className='main_img' src={logoPostgresql} alt='import' height={150}></img></a>
                            <br></br>
                            PostgreSQL - an open source database mangement system for our backend work
                        </li>       
                        
                        
                    </ul>

                </div>
                    
                <br></br>
                <br></br>
               
                <br></br>
               

            </div>
            
            
        </div>
    )

    
}

export default Main;