import React, { useState } from 'react';
import './index.css'
import { Nav, NavLink, NavMenu } from "../NavbarElements/";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/About" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/Signup" activeStyle>
                        Signup
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;