import React from 'react'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                                <FooterLink to='/signin'>About Us</FooterLink>
                                <FooterLink to='/signin'>Router</FooterLink>
                                <FooterLink to='/signin'>New Route Us</FooterLink>
                                <FooterLink to='/signin'>Lets Us</FooterLink>
                                <FooterLink to='/signin'>Terms of services</FooterLink>
                        </FooterLinkItems>
                    </FooterWrapper>
                    <FooterWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                                <FooterLink to='/signin'>About Us</FooterLink>
                                <FooterLink to='/signin'>Router</FooterLink>
                                <FooterLink to='/signin'>New Route Us</FooterLink>
                                <FooterLink to='/signin'>Lets Us</FooterLink>
                                <FooterLink to='/signin'>Terms of services</FooterLink>
                        </FooterLinkItems>
                    </FooterWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
