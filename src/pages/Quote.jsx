import React from 'react';
import "../elements/Quote.css";

function Quote() {
  return (
      <div className="modal_container" id="modal">
          <div className="modal">
              <a href="#" className="close">X</a>
              <span className="modal_heading">Your Quote</span>
              <form action="#">
                  <input type="text" placeholder='Full Name'/> <br/>
                  <input type="text" placeholder='Email'/> <br/>
                  <input type="number" placeholder='Phone'/> <br/>
                  <input type="submit" placeholder='Submit' value="Submit"/>
              </form>
          </div>
      </div>
  );
}

export default Quote;
