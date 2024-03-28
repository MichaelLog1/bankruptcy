/* 

Creator: Michael Logsdon 3/7/24

This file will hold a standardized css template for any nav bars that we employ.
The reason that it is its own component is try to standardize our website so eveything looks consistent

*/


import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: transparent;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((60vw - 1000px) / 2);
    z-index: 12;
`;
 
export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #ffffff;
    }
`;

 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;