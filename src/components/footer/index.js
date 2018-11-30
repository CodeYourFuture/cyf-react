import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import fblogo from '../../assets/images/logos/fb_logo.svg';
import twitterlogo from '../../assets/images/logos/twitter-silhouette.svg';
import linkedinlogo from '../../assets/images/logos/linkedin-logo.svg';
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
                <Link
                  to="http://www.alicerowsome.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alice Rowsome
                </Link>
              </strong>
              &nbsp;|&nbsp; Registered charity number&nbsp;
              <Link
                to="http://apps.charitycommission.gov.uk/Showcharity/RegisterOfCharities/CharityFramework.aspx?RegisteredCharityNumber=1174929&SubsidiaryNumber=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                1174929
              </Link>. |{' '}
              <Link
                to="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
            </OurVendorContainer>

            <SocialContainer>
              <Link
                to="https://www.facebook.com/codeyourfuture.io"
                target="_blank"
              >
                <img src={fblogo} style={logoStyle} alt="facebook" />
              </Link>
              <Link to="https://twitter.com/CodeYourFuture_" target="_blank">
                <img src={twitterlogo} style={logoStyle} alt="twitter" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/codeyourfuture"
                target="_blank"
              >
                <img src={linkedinlogo} style={logoStyle} alt="linkedin" />
              </Link>
              <Link to="mailto:contact@codeyourfuture.io" target="_blank">
                <img src={emaillogo} style={logoStyle} alt="email" />
              </Link>
            </SocialContainer>
          </ContentContainer>
        </FooterContainer>
      </div>
    </footer>
  </div>
);

export default Footer;
