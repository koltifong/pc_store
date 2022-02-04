import React from 'react';
import { Divider, Icon, Message } from 'semantic-ui-react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
    } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    {/*<FooterLinkItems>
                        <FooterLinkTitle>CATEGORIES</FooterLinkTitle>
                        <FooterLink to="/">System Builder</FooterLink>
                        <FooterLink to="/">Build Guides</FooterLink>
                        <FooterLink to="/">Completed Builds</FooterLink>
                    </FooterLinkItems>*/}
                    <FooterLinkItems>
                        <FooterLinkTitle>INFORMATION</FooterLinkTitle>
                        <FooterLink to="/">Home</FooterLink>
                        <FooterLink to="/about">About</FooterLink>
                        <FooterLink to="/contact">Contact</FooterLink>
                        <FooterLink to="/prebuilt">Completed Builts</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    {/*<FooterLinkItems>
                        <FooterLinkTitle>COMPANY</FooterLinkTitle>
                        <FooterLink to="/">About Us</FooterLink>
                        <FooterLink to="/">Our Services</FooterLink>
                        <FooterLink to="/">Privacy Policy</FooterLink>
                        <FooterLink to="/">Affiliate Program</FooterLink>
                    </FooterLinkItems>*/}
                    <FooterLinkItems>
                    <FooterLinkTitle>SOCIALS</FooterLinkTitle>
                        <FooterLink to=''><Icon name='facebook'></Icon>Facebook</FooterLink>
                        <FooterLink to=''><Icon name='instagram'></Icon>Instagram</FooterLink>
                        <FooterLink to=''><Icon name='twitter'></Icon>Twitter</FooterLink>
                        <FooterLink to=''><Icon name='reddit'></Icon>Reddit</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <div className='text-white'><Icon name='copyright' />2022, All rights reserved.</div>
        </FooterWrap>

    </FooterContainer>
  );
}

export default Footer;