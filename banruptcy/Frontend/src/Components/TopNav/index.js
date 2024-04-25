import React, { useState } from 'react';
import './index.css'
import { Nav, NavLink, NavMenu } from "../NavbarElements/";
 
const Navbar = () => {
    // this will be used for the initial pages but not for the dashboard
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle className="header">
                        Home
                    </NavLink>
                    <NavLink to="/About" activeStyle className="header">
                        About
                    </NavLink>
                    <NavLink to="/Signup" activeStyle className="header">
                        Signup
                    </NavLink>
                </NavMenu>
            </Nav>
            
        </>
    );
};
 
export default Navbar;