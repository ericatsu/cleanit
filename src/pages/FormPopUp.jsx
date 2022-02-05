import React, { useState } from 'react';
import emailjs from 'emailjs-com'

function FormPopUp() {
    const [popUp, setPopUp] = useState(false);

    const togglePopUp = () => {
       setPopUp = (!popUp);
    };

    if(popUp) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_dthgr19', e.target, 'user_98Xrm6LA5oSfERYWjVvyR')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }

  return (
      <> 
     <div className="popUp" onSubmit={sendEmail}>
         <div onClick={togglePopUp} className="overlay"></div>
         <div className="popUp-content">
            <form action="#" className='form'>
            <h1 className='formH1'>Contact Me</h1>
            <label htmlFor="for" className="formLabel">Full Name</label>
            <input type="text" className="formInput" name='name'required/>
            <label htmlFor="for" className="formLabel">Phone</label>
            <input type="phone" className="formInput" name='phone' required/>
            <label htmlFor="for" className="formLabel">Email</label>
            <input type="email" className="formInput" name='email' required/>
            <label htmlFor="for" className="formLabel">Location</label>
            <input type="location" className="formInput" name='location' required/>
            <label htmlFor="for" className="formLabel">Comment / Service</label>
            <input type="text" className="serviceInput" name='text'/>
            <button type='submit' className="formButton">Submit</button>
            <button className="close-popUp" onClick={togglePopUp}>
              Close
            </button>
            </form>
         </div>
      </div>
      </>
  );
}

export default FormPopUp;
