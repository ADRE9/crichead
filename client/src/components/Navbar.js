import React from 'react';
// import { NavLink } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer,NavLogo,MobileIcon,NavItem,NavMenu,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Dream11</NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to ='signup'>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
                </NavbarContainer>
                
            </Nav>
        </>
    )
}
export default Navbar;