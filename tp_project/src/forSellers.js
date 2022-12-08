
import React from "react";
import Business2 from './Main/business2.png'
import SellersVid from './Main/SellersDemoVid.mov'
import SellersVid2 from './Main/SellersDemoVid2.mov'
import './forSellers.css'
function ForSellers(){

   
    return(
        <div className="container forSellers">
            <div className="row d-flex justify-content-center forSellers_statement">
                <h2>Start selling on Turn the Page!</h2>
                <img className="business_pic" src={Business2} alt="n/a" ></img>
                <div className="row">
                    <div className="col-4">
                        <br></br>
                        <h5>Get started for free</h5>
                        <p>Create an account and you can start creating listings! You only pay when you make a sale!</p>
                    </div>

                    <div className="col-4">
                        <br></br>
                        <h5>Find new customers</h5>
                        <p>Create an account and you can start creating listings! You only pay when you make a sale!</p>
                    </div>

                    <div className="col-4">
                        <br></br>
                        <h5>Grow your business</h5>
                        <p>Create an account and you can start creating listings! You only pay when you make a sale!</p>
                    </div>
                </div>
                
            </div>
            <br></br>
            <div>
                <div>
                <h5>Quickly get set up and begin creating listings. We make it easy!</h5>
                <video width={500} height={500} controls loop>
                    <source src={SellersVid} type='video/mp4'/>
                </video>
                </div>
                <br></br>
                <div>
                    <h5>Complete sales with PayPal or Credit Card</h5>
                    <video width={500} height={200} controls loop>
                    <source src={SellersVid2} type='video/mp4'/>
                </video>
                </div>
                <br></br>
                <h5>Manage everything from one place! We make it easy for your business to succeed!</h5>
            </div>
            
            

        </div>
    )
}

export default ForSellers