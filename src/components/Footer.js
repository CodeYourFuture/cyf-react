import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <div className="section-container">
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="scroll-to-top">
              <a href="#top">
                <i className="fa fa-chevron-up" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="credits">
            <div className="col-sm-12">
              <div className="our-vendor">
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
                &nbsp;|&nbsp;Supported with{' '}
                <img src="/img/ico/hearts.svg" alt="LOVE" />by&nbsp;
                <strong>
                  <Link
                    to="http://www.hackyourfuture.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HackYourFuture
                  </Link>&nbsp;|&nbsp;
                </strong>
                Registered charity number&nbsp;
                <Link
                  to="http://apps.charitycommission.gov.uk/Showcharity/RegisterOfCharities/CharityFramework.aspx?RegisteredCharityNumber=1174929&SubsidiaryNumber=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1174929
                </Link>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
