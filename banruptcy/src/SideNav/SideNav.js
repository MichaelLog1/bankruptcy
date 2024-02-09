import React, { useState } from 'react';
import './SideNav.css'

const SideNav = (props) => {
return (
<div className="sidenav" id='nav'>
    <a href="#GoalTracker" className="section">Calendar</a>
    <a href="#GoalCreation" className="section">Goal Creation</a>
</div>
 );
};

export default SideNav;