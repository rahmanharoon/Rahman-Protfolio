import React from 'react';
import {animateScroll as scroll} from 'react-scroll'; 
import { 
    FaFacebook, 
    FaGithub, 
    FaInstagram, 
    FaLinkedin, 
    FaStackOverflow, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLink,
    FooterSocialLink,
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
                                <FooterLink 
                                to='#home'
                                exact='true'
                                >Home</FooterLink>
                                <FooterLink to="#about" id={"about"} exact="true">About</FooterLink>
                                <FooterLink to='#discover' id={"discover"} exact="true">Discover</FooterLink>
                                <FooterLink to='#services' id={"services"} exact="true">Services</FooterLink>
                                <FooterLink to='#gallery' id={"gallery"} exact="true">Gallery</FooterLink>
                                <FooterLink to='#contact' id={"contact"} exact="true">Connect With Me</FooterLink>
                                <FooterLink to='#terms' id={"terms"} exact="true">Terms And Condition</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Touch With Me</FooterLinkTitle>
                                <FooterSocialLink 
                                href="//www.facebook.com/rahman.haroon.7/"
                                target="_blank"
                                >Facebook
                                </FooterSocialLink>
                                <FooterSocialLink 
                                href="//www.instagram.com/rahm.n_/?hl=en" 
                                target="_blank" 
                                >Instagram
                                </FooterSocialLink>
                                <FooterSocialLink 
                                href="//www.linkedin.com/in/rahman-haroon-589520191/" 
                                target="_blank" 
                                >Linkedin
                                </FooterSocialLink>
                                <FooterSocialLink 
                                href="//twitter.com/rahman__haroon" 
                                target="_blank" 
                                >Twitter
                                </FooterSocialLink>
                                <FooterSocialLink 
                                href="//github.com/rahmanharoon" 
                                target="_blank" 
                                >Github
                                </FooterSocialLink>
                                <FooterSocialLink 
                                href="//www.youtube.com/channel/UCXpy9U8Tm93BosZKkm_XE6A" 
                                target="_blank" 
                                >Youtube
                                </FooterSocialLink>
                                <FooterSocialLink 
                                href="//stackoverflow.com/users/13913053/rahman-haroon?tab=profile" 
                                target="_blank" 
                                >Stackoverflow
                                </FooterSocialLink>
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
                            href="//www.instagram.com/rahm.n_/?hl=en" 
                            target="_blank" 
                            aria-label="Instagram"
                            >
                            <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="//www.linkedin.com/in/rahman-haroon-589520191/" 
                            target="_blank" 
                            aria-label="Linkedin"
                            >
                            <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="//twitter.com/rahman__haroon" 
                            target="_blank" 
                            aria-label="Twitter"
                            >
                            <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="//github.com/rahmanharoon" 
                            target="_blank" 
                            aria-label="Github"
                            >
                            <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="//www.youtube.com/channel/UCXpy9U8Tm93BosZKkm_XE6A" 
                            target="_blank" 
                            aria-label="Youtube"
                            >
                            <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="//stackoverflow.com/users/13913053/rahman-haroon?tab=profile" 
                            target="_blank" 
                            aria-label="Stackoverflow"
                            >
                            <FaStackOverflow />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
