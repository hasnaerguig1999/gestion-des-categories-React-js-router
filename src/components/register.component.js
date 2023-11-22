import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import Footer from "./footer.component"

export default function Register() {
  const [ email, setEmail ] = useState('');
  const inputTxt = useRef(null)
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // const isEmailValid = (email) => {
  //   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   return emailPattern.test(email);
  // };

  const handleRegisterClick = () => {
    // if (isEmailValid(email)) {
      navigate('/thank', {state : email});
    // } 
  };

    useEffect(() => {
      inputTxt.current.focus()
    }, [])
  return (
    <div>
      <div className="container">
        <h2 className="styleh2regiser">Register for wizard Tech</h2> <br />
        <p className="pstyleregiser">Make sure to grab your spot for this year's conference ! We love technology and consistently <br />
        work towards being the premier provider of technology solutions and events that connect the <br />world</p>
        <form  className="forme">
          <label htmlFor="" className="labelregister">Email</label><br />
          <input  type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your Email"
          ref={inputTxt}
           className="inputregister" /><br />
          <button className="buttonregister" onClick={handleRegisterClick}>Submit</button>

        </form>
         <Footer />
      </div>
    </div>
  )
}
