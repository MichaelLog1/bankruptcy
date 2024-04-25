import React, { useState } from 'react';
import './SideNav.css'

const SideNav = (props) => {
    // this is just for the dashboard
return (
<div className="sidenav" id='nav'>
    <a href="/Dashboard/User" className="section">Calendar</a>
    <a href="/Dashboard/Form" className="section">Financial Form</a>
</div>
 );
};

export default SideNav;