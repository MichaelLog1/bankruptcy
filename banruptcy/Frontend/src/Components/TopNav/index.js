import React, { useState } from 'react';
import './index.css'
import { Nav, NavLink, NavMenu } from "../NavbarElements/";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Home" activeStyle className="header">
                        Home
                    </NavLink>
                    <NavLink to="/About" activeStyle className="header">
                        About
                    </NavLink>
                    <NavLink to="/Signup" activeStyle className="header">
                        Signup
                    </NavLink>
                    <NavLink to="/Dashboard" activeStyle className="header">
                        Dashboard
                    </NavLink>
                </NavMenu>
            </Nav>
            
        </>
    );
};
 
export default Navbar;