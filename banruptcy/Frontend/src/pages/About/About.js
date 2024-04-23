import React from 'react'
import TopNav from "../../Components/TopNav/index"
import "./About.css"
import money_image from "../../Assets/money.png"


function About() {

    return (
      <div>
        <TopNav></TopNav>
        <div className='cont7'>
          <div className='info7'>
            <div className='title7'>About Bankruptcy</div>
            <div className='texts7'>What does Bankruptcy provide?</div>
            <div className='description7'>The Vision of Bankruptcy is to simplify savings goals for individuals who don't want unecessary figures or extraneous data, <b>Bankruptcy makes saving simple.</b></div>
            <div className='texts7'>Why Bankruptcy?</div>
            <div className='description7'>While not all of Bankrupcy's key features have been implemented, our vision is still in its infantcy, with so much more to come.</div>
            <div className='description7'>With Bankrupcy, you can be sure that your financial information is kept safe.</div>
          </div>
        </div>
      </div>
      
    );
  }
  
  export default About;