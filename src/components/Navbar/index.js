import React from 'react';
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Rahman Haroon</NavLogo>
                    <MobileIcon onClick = {toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="gallery">Gallery</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="contact">Connect Me</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
