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
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services">
                        Services
                    </SidebarLink>
                    <SidebarLink to="contact">
                        Connect Me
                    </SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    <SidebarRoute to="/hire">
                        Hire
                    </SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
