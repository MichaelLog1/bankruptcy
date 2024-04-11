import React from 'react'
import financial_image from '../../Assets/finance.png'
import './Home.css'
import TopNav from "../../Components/TopNav/index"

function Home() {

    return (
      <div>
        <TopNav></TopNav>
        <div className='cont'>
          
          <div className='info'>
            <div className='title'>Bankruptcy.</div>
            <div className='texts'>A Fiancial Tool for the Individual.</div>
            <div className='description'>Bankruptcy features cutting edge goal planning, goal tracking, and financial advice for indivuduals of all knowledge levels and starting points. Sign up, tell us about yourself, and reap the benefits of a brighter, more financially secure future.</div>
          </div>
          <div className="texts"><img src={financial_image} alt=''/></div>
        </div>
      </div>
      
    );
  }
  
  export default Home;