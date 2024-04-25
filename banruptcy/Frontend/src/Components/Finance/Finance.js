import React, { useState } from 'react'
import Axios from "axios";
import './Finance.css'
import { useNavigate } from "react-router-dom";
import user_icon from '../../Assets/person.png'
import email_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'


function Finance() {
// amount, timeframe, descriptor
    const navigate = useNavigate();
    const [amount, setAmount] = useState("");
    const [timeFrameStart, setTimeFrameStart] = useState("");
    const [timeFrameEnd, setTimeFrameEnd] = useState("");
    const [description, setDescription] = useState("");

    // API call to update the database
    const handleSumbit = () => {
        Axios.post("http://localhost:3001/Form", {
            amount: amount,
            timeFrameStart: timeFrameStart,
            timeFrameEnd: timeFrameEnd,
            description: description,
        }).then((response) => {
            console.log(response);
        });
        // navigate to the next page
        navigate("../Dashboard/user");
    };

    return (
        <div className='container3'>
            <div className='header3'> 
                <div className='text3'>Financial Input</div> 
                <div className='underline3'></div>
            </div>
            <div className='inputs3'>
                <div className='textbox3'>
                    <img src={user_icon} alt=''/>
                    <input placeholder='How much do you want to save?' 
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                    />
                </div>
                <div className='textbox3'>
                    <img src={email_icon} alt=''/>
                    <input placeholder='Start Date (YYYY-MM-DD)' 
                        onChange={(e) => {
                            setTimeFrameStart(e.target.value);
                        }}
                    />
                </div>
                <div className='textbox3'>
                    <img src={email_icon} alt=''/>
                    <input placeholder='End Date (YYYY-MM-DD)' 
                        onChange={(e) => {
                            setTimeFrameEnd(e.target.value);
                        }}
                    />
                </div>
                <div className='textbox3'>
                    <img src={password_icon} alt=''/>
                    <input placeholder='Vacation, Retirement, etc.' 
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
      
    );
  }
  
  export default Finance;