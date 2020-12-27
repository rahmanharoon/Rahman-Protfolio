import React from 'react';
import {animateScroll as scroll} from 'react-scroll'; 
import{
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarWrapper,
    SidebarLink,
    SidebtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {

    const toggleHome = ()=> {
        scroll.scrollToTop();
        <CloseIcon />
    }

    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle} >
            <Icon onClick = {toggle} >
                <CloseIcon />
            </Icon>
            <Icon onClick = {toggleHome} >
                scroll.scrollToTop();
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to="/" isOpen = {isOpen} onClick = {toggleHome} >
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" isOpen = {isOpen} onClick = {toggle} >
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" isOpen = {isOpen} onClick = {toggle} >
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" isOpen = {isOpen} onClick = {toggle} >
                        Services
                    </SidebarLink>
                    <SidebarLink to="gallery" isOpen = {isOpen} onClick = {toggle} >
                        Gallery
                    </SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    <SidebarRoute to="/contact" isOpen = {isOpen} onClick = {toggle} >
                    Connect Me
                    </SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
