import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle
} from './FooterElements';

const Footer = () => {
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
                                <FooterLink to='//www.facebook.com/rahman.haroon.7/'>Facebook</FooterLink>
                                <FooterLink to='/signin'>Router</FooterLink>
                                <FooterLink to='/signin'>New Route Us</FooterLink>
                                <FooterLink to='/signin'>Lets Us</FooterLink>
                                <FooterLink to='/signin'>Terms of services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Rahman Haroon
                        </SocialLogo>
                        <WebsiteRights>Rahman Haroon © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SociaIconLink 
                            href="//www.facebook.com/rahman.haroon.7/" 
                            target="_blank" 
                            aria-label="Facebook"
                            >
                            <FaFacebook />
                            </SociaIconLink>
                            <SociaIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Instagram"
                            >
                            <FaInstagram />
                            </SociaIconLink>
                            <SociaIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Linkedin"
                            >
                            <FaLinkedin />
                            </SociaIconLink>
                            <SociaIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Twitter"
                            >
                            <FaTwitter />
                            </SociaIconLink>
                            <SociaIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Github"
                            >
                            <FaGithub />
                            </SociaIconLink>
                            <SociaIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Youtube"
                            >
                            <FaYoutube />
                            </SociaIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
