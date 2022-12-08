import React from 'react'
import './Main/Main.css'
import seller from './Main/business1.png'
import buyer from './Main/student.png'

import logoReact from './Main/react_logo.png'
import logoPostgresql from './Main/postgresql_logo.png'
import logoBootstrap from './Main/bootstrap_logo.png'
import logoFontawesome from './Main/fontawesome.png'
import {useNavigate} from 'react-router-dom';


function Main(){

    const navigate = useNavigate();

    const navigateToforSellers = () => {
        navigate('/forSellers')
    }

    const navigateToShop = () => {
        navigate('/books')
    }

    return(
        <div className='container-fluid'>
            <div className='main_content '>
                <div className='row d-flex justify-content-center main_justPosted'>
                    <h3>Recently Posted</h3>
                    <h5>No new listings at this time. Check back later!</h5>
                </div>

                <div className='row main_buySell d-flex justify-content-center'>
                    <div className='main_sellers col-5 '>
                        <img className=' main_img col-12 d-flex justify-content-center' src={seller} alt='not found' height={350} ></img>
                        <br></br>
                        <h5>For Sellers & Businesses</h5>
                        <h3>Reach new customers and grow your business!</h3>
                        <p>We make it easy for you to to sell directly to consumers. Simply make an account
                            and you can start creating listings. We take care of everything so you can have peace of mind. 
                        </p>
                        <div className='col d-flex justify-content-center '>
                            <button onClick={navigateToforSellers}>More Info!</button>
                            <br></br>
                            <br></br>
                        </div>
                        
                    </div>
                    <div className='main_buyers col-5'>
                        <img className=' main_img col-12 d-flex justify-content-center' src={buyer} alt='not found' height={350}></img>
                        <br></br>
                        <h5>For Buyers & Students</h5>
                        <h3>Browse our listings and find what your searching for!</h3>
                        <p>We keep our prices are transparent as possible. You can begin browsing without an account. </p>
                        <br></br>
                        <div className='col d-flex justify-content-center '>
                            <button onClick={navigateToShop}>Lets Go!</button>
                            <br></br>
                            <br></br>
                        </div>
                        
                    </div>
                    <br></br>
                </div>
                <br></br>

                <div className='main_tech'>
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
                        <li className='col-3'>
                        <a href='https://fontawesome.com' target='_blank' rel='noreferrer'> <img className='main_img' src={logoFontawesome} alt='import' height={150}></img></a>
                            <br></br>
                            FontAwesome- A font and icon toolkit based on CSS
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