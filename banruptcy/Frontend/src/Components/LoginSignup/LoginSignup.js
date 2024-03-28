import React, { useState } from 'react'
import Axios from "axios";
import './LoginSignup.css'

import user_icon from '../../Assets/person.png'
import email_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    
    const register = (state) => {
        setAction(state);
        
        Axios.post("http://localhost:3001/Signup", {
            username: usernameReg,
            password: passwordReg,
            email: emailReg,
        }).then((response) => {
            console.log(response);
        });
    };
    


    return (
        <div className='container'>
            <div className='header'> 
                <div className='text'>{action}</div> 
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                    <img src={user_icon} alt=''/>
                    <input type='text' placeholder='Name' 
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }}
                    />
                </div>}
                <div className='input'>
                    <img src={email_icon} alt=''/>
                    <input type='email' placeholder='Email' 
                        onChange={(e) => {
                            setEmailReg(e.target.value);
                        }}
                    />
                </div>
                <div className='input'>
                    <img src={password_icon} alt=''/>
                    <input type='password' placeholder='Password' 
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}
                    />
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className='forgot-password'> Lost Password? <span>CLick Here!</span></div>}
            <div className='submit-container'>
                <div className={action ==="Login"?"submit gray":"submit"} onClick={()=>{register("Sign Up")}}>Sign Up</div>
                <div className={action ==="Sign Up"?"submit gray":"submit"} onClick={()=>{register("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignup
