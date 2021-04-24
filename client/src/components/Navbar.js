import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';
import SignOutButton from "./SignOutButton";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>CricHead</NavLogo>
                    <SignOutButton/>
                </NavbarContainer>
                
            </Nav>
        </>
    )
}
export default Navbar;