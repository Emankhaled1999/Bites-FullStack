import React from 'react';
import {Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar=({toggle})=>{
    return (
        <>
            <Nav>
                <NavLink to='/'>Bites</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Login</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
};
export default Navbar;   