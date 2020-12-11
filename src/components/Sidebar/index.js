import React from 'react';
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
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle} >
            <Icon onClick = {toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" isOpen = {isOpen} onClick = {toggle} >
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" isOpen = {isOpen} onClick = {toggle} >
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" isOpen = {isOpen} onClick = {toggle} >
                        Services
                    </SidebarLink>
                    <SidebarLink to="contact" isOpen = {isOpen} onClick = {toggle} >
                        Connect Me
                    </SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    <SidebarRoute to="/hire" isOpen = {isOpen} onClick = {toggle} >
                        Hire
                    </SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
