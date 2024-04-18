import React, { useState } from 'react'
import Sidenav from "../../Components/SideNav/SideNav"
import './Finance.css'
import { useNavigate } from "react-router-dom";
import user_icon from '../../Assets/person.png'
import email_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'


function Finance() {
// Target, timeframe, descriptor
    const navigate = useNavigate();
    const [amount, setAmount] = useState();
    const [timeFrame, setTimeFrame] = useState();
    const [description, setDescription] = useState("");

    const handleSumbit = () => {
        // Axios.post("http://localhost:3001/Dashboard/Form", {
        //     amount: amount,
        //     timeFrame: timeFrame,
        //     description: description,
        // }).then((response) => {
        //     console.log(response);
        // });
        navigate("../Dashboard/user");
    };

    return (
        <div>
            {/* <Sidenav></Sidenav> */}
            <div className='container3'>
                <div className='header3'> 
                    <div className='text3'>Financial Input</div> 
                    <div className='underline3'></div>
                </div>
                <div className='inputs3'>
                    <div className='textbox'>
                        <img src={user_icon} alt=''/>
                        <input type='text' placeholder='How much do you want to save?' 
                            onChange={(e) => {
                                setAmount(e.target.value);
                            }}
                        />
                    </div>
                    <div className='textbox'>
                        <img src={email_icon} alt=''/>
                        <input type='text' placeholder='What is your time frame? (Days)' 
                            onChange={(e) => {
                                setTimeFrame(e.target.value);
                            }}
                        />
                    </div>
                    <div className='textbox'>
                        <img src={password_icon} alt=''/>
                        <input type='text' placeholder='Vacation, Retirement, etc.' 
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className='submit-container3'>
                    <div className='submit3' onClick={()=>{handleSumbit()}}>Submit</div>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default Finance;