import React from 'react'
import LoginSignup from '../../Components/LoginSignup/LoginSignup';
import TopNav from "../../Components/TopNav/index"

function Signup() {
    // dont forget the topnav
    return (
      <div>
        <TopNav></TopNav>
        <LoginSignup></LoginSignup>
      </div>
      
    );
  }
  
  export default Signup;