import React from "react";
import Justin from './Justin.jpeg'
import Edward from './Edward.PNG'
import Gene from './Gene.PNG'
import './aboutUs.css'
function aboutUs(){
    return (
    <div className="container-fluid">
        <h2 className='row d-flex justify-content-center'>About Us</h2>
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
            <br></br>
        </h4>
        <div className="team">
            <div className="row">
                <img className="col-3" src={Justin} alt="selfie" height={200}/>
                <div className="col-7">
                    <h3>Hey, my name is Justin</h3>
                    <h4>I'm a Hunter College senior working towards my B.A. in Computer Science and a Full Stack Developer. I built the frontend of our
                        web application using React.js and Bootstrap. 
                    </h4>
                </div>
                
            </div>
            <br></br>
            <div className="row">
                <img className="col-3" src={Edward} alt="selfie" height={200}/>
                <div className="col-7">
                    <h3>Hey, my name is Edward</h3>
                    <h4>Statement Here</h4>
                </div>
                
            </div>
            <br></br>
            <div className="row">
                <img className="col-3" src={Gene} alt="selfie" height={200}/>
                <div className="col-7">
                    <h3>Hey, my name is Gene</h3>
                    <h4>Statement Here</h4>
                </div>
                
            </div>
            <br></br>
        </div>
    </div>
    )
}

export default aboutUs