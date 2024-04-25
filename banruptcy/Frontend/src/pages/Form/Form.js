import React from 'react'
import Finance from '../../Components/Finance/Finance';
import SideNav from '../../Components/SideNav/SideNav';
import "./Form.css"

function Form() {
    // only need the sidenav and the form
    return (
      <div className='conts'>
        <SideNav></SideNav>
        <Finance></Finance>
      </div>
      
    );
  }
  
  export default Form;