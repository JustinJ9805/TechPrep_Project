import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="container-fluid">
            <div className="row">
                <br></br>
                <a href="/aboutUs"><button className="aboutUs">About Us</button></a>
                <h5 className="col d-flex justify-content-center">Built by Team Unknown @ CUNY Tech Prep</h5>
                <br></br>
            </div>
        </div>
    )
}

export default Footer