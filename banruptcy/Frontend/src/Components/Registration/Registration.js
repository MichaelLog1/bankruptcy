import React, { useState } from 'react';





const Registration = (props) => {

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    } 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
    <div className="regisForm">
         <div>
            <h1>Sign Up</h1>
            <form>
                <label>Email</label>
                <input onChange={handleEmail} className="input" value={email} type="email" />
                <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
            </form>
         </div>
    </div>
     );
    };
    
    export default Registration;