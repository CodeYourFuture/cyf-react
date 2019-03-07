import React from 'react';
import styled from 'react-emotion';
import fblogo from '../../assets/images/logos/fb_logo.svg';
import twitterlogo from '../../assets/images/logos/twitter-silhouette.svg';
import LinkedinLogo from '../../assets/images/logos/linkedin-logo.svg';
import emaillogo from '../../assets/images/logos/email-icon.svg';

const logoStyle = {
  width: '20px',
  height: '21px',
};

const FooterContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const SocialContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OurVendorContainer = styled('div')`
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Footer = () => (
  <div className="section-container">
    <footer>
      <div className="container">
        <FooterContainer>
          <div className="scroll-to-top">
            <a href="#top">
              <i className="fa fa-chevron-up" />
            </a>
          </div>
          <ContentContainer>
            <OurVendorContainer className="our-vendor">
              &copy; All rights reserved&nbsp;|&nbsp;Photos by &copy;&nbsp;
              <strong>
                <a href="http://www.alicerowsome.com" rel="noopener noreferrer" target="_blank">
                  Alice Rowsome
                </a>
              </strong>
              &nbsp;|&nbsp; Registered charity number&nbsp;
              <a
                href="http://apps.charitycommission.gov.uk/Showcharity/RegisterOfCharities/CharityFramework.aspx?RegisteredCharityNumber=1174929&SubsidiaryNumber=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                1174929
              </a>
              .
            </OurVendorContainer>
            <SocialContainer>
              <a
                href="https://www.facebook.com/codeyourfuture.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fblogo} style={logoStyle} alt="facebook" />
              </a>
              <a
                href="https://twitter.com/CodeYourFuture_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterlogo} style={logoStyle} alt="twitter" />
              </a>
              <a
                href="https://www.Linkedin.com/company/codeyourfuture"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedinLogo} style={logoStyle} alt="Linkedin" />
              </a>
              <a
                href="mailto:contact@codeyourfuture.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={emaillogo} style={logoStyle} alt="email" />
              </a>
            </SocialContainer>
          </ContentContainer>
        </FooterContainer>
      </div>
    </footer>
  </div>
);

export default Footer;
