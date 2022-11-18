import React from 'react'
import './Main.css'
import seller from './seller_pic.png'
import buyer from './buyer_pic.png'
import logoPic from './logo_pic.png'

function Main(){
    return(
        <div className='container-fluid'>
            <div className='content'>
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
                        <img className='col-12 d-flex justify-content-center' src={seller} alt='not found' height={350} ></img>
                        <h5>For Sellers</h5>
                        <h3>Reach new customers and grow your business!</h3>
                        <p>We make it easy for you to to sell directly to consumers. Simply make an account
                            and you can start creating listings. We take care of everything so you can have peace of mind. 
                        </p>
                        <button>Lets Go!</button>
                    </div>
                    <div className='buyers col-5'>
                        <img className='col-12 d-flex justify-content-center' src={buyer} alt='not found' height={350}></img>
                        <h5>For Buyers</h5>
                        <h3>Browse our listings and find what your searching for!</h3>
                        <p>We keep our prices are transparent as possible. You can begin browsing without an account. </p>
                        <button>Lets Go!</button>
                    </div>
                    <br></br>
                </div>
                <div className='row tech'>
                    <h3 className='col d-flex justify-content-center'>Technology</h3>

                </div>
                    
                <br></br>
                <br></br>
                <div className='row searchBar'>
                    <input type='text' placeholder='search...'></input>
                </div>
                <br></br>
               

            </div>
            
            
        </div>
    )
}

export default Main;