import React from "react";
import './Footer.css'

const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      //setFormStatus('Sent')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)

      name.value='';
      email.value='';
      message.value='Thanks! We got your message and will reach out to you!';
    }
    return (
        <div className="container-fluid footer_form">
            <div className="row mt-5 ">
                <h4 className="mb-3 ">Questions? Concerns? Contact Us!</h4>
                <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <br></br>
                    <label className="form-label" htmlFor="name">
                    Name
                    </label>
                    <input className="form-control" type="text" id="name" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                    Email
                    </label>
                    <input className="form-control" type="email" id="email" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                    Message
                    </label>
                    <textarea className="form-control" id="message" required />
                </div>
                <button className="btn btn-danger" type="submit">
                    {formStatus}
                </button>
                </form>
            </div>
      </div>
    )
  }

function Footer(){
    return(
        <div className="container-fluid footer">
            <div className="row d-flex justify-content-center">
                <div className="col-5 footer_buttons">
                    
                    <a href="/aboutUs"><button className="f_button aboutUs">About Us</button></a>
                    <br></br>
                    <button className="f_button">Privacy Policy</button>
                    <br></br>
                    <button className="f_button">Terms of Use</button>
                    <br></br>
                    <button className="f_button">Terms of Sale</button>
                </div>
                
                <div className="col-5" >
                    <ContactForm/>
                    <br></br>
                </div>
            </div>

            <div className="row">
                <h5 className="col d-flex justify-content-center">Built by Team Unknown @ CUNY Tech Prep</h5>
            </div>
            
        </div>
    )
}

export default Footer