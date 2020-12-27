import React from 'react';
import {animateScroll as scroll} from 'react-scroll'; 
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';
const Footer = () => {

    const toggleHome = ()=> {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                                <FooterLink to='/'>Home</FooterLink>
                                <FooterLink to='about'>About</FooterLink>
                                <FooterLink to='discover'>Discover</FooterLink>
                                <FooterLink to='services'>Services</FooterLink>
                                <FooterLink to='gallery'>Gallery</FooterLink>
                                <FooterLink to='contact'>Connect with me</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Touch With Me</FooterLinkTitle>
                                <FooterLink href="//www.facebook.com/rahman.haroon.7/"
                                            target="_blank"
                                            aria-label="Facebook">
                                                Facebook
                                            </FooterLink>
                                <FooterLink to='/signin'>Router</FooterLink>
                                <FooterLink to='/signin'>New Route Us</FooterLink>
                                <FooterLink to='/signin'>Lets Us</FooterLink>
                                <FooterLink to='/signin'>Terms of services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Rahman Haroon
                        </SocialLogo>
                        <WebsiteRights>Rahman Haroon © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink 
                            href="//www.facebook.com/rahman.haroon.7/" 
                            target="_blank" 
                            aria-label="Facebook"
                            >
                            <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Instagram"
                            >
                            <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Linkedin"
                            >
                            <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Twitter"
                            >
                            <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Github"
                            >
                            <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Youtube"
                            >
                            <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
