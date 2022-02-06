import React from 'react';
import '../elements/Quote.css'

function Quote() {
  return (
    <div className="whiteDiv">
  <div className="container">
      <div className="heading">
          <h1>How May we help You</h1>
      </div>
      <div className="slogan">
        <a href="tel:050-044-8184" className="nowrap">Call Now </a>
           to check availability and to request a free estimate
      </div>
      <div className="telNum">
        <a href="tel:050-044-8184" className="nowrap">050-044-8184</a>
      </div>
  <form className="Form" action='#'>
    <div className="Form-sections">
    <div className="Form-section">
       <div className="Form-field">
        <input className="Form-input" type="text" name="name" placeholder="Name"/>
      </div>
      <div className="Form-field">
        <input className="Form-input" type="email" name="name" placeholder="Email"/>
      </div>
    </div>

    <div className="Form-section">
      <div className="Form-field">
        <input className="Form-input" type="tel" name="name" placeholder="Phone"/>
      </div>
      <div className="Form-field">
        <input className="Form-input" type="text" name="name" placeholder="Address"/>
      </div>
    </div>

    <div className="Form-section">
      <div className="Form-field">
        <input className="Form-input" type="text" name="name" placeholder="Comment / Service"/>
      </div>
    </div>
  </div>

  <div className="Form-buttonContainer">
        <button className="Form-button">Submit</button>
    </div>

</form>
  </div>
  </div>
  );
}

export default Quote;
