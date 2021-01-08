import React from 'react';
import{
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarWrapper,
    SidebarLink
} from './SidebarElements'

const ContactSidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle} >
            <Icon onClick = {toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to="/#home" id='home' isOpen = {isOpen} onClick = {toggle} >
                        Home
                    </SidebarLink>
                    <SidebarLink to="/#about" isOpen = {isOpen} onClick = {toggle} >
                        About
                    </SidebarLink>
                    <SidebarLink to="/#discover" isOpen = {isOpen} onClick = {toggle} >
                        Discover
                    </SidebarLink>
                    <SidebarLink to="/#services" isOpen = {isOpen} onClick = {toggle} >
                        Services
                    </SidebarLink>
                    {/* <SidebarLink to="#gallery" isOpen = {isOpen} onClick = {toggle} >
                        Gallery
                    </SidebarLink> */}
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default ContactSidebar;
