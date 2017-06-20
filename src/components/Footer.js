import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => (
  <div className="section-container">

  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="scroll-to-top">
            <Link to="#top"><i className="fa fa-chevron-up"></i></Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="credits">
          <div className="col-sm-12">
            <div className="our-vendor">
              &copy; All rights reserved&nbsp;|&nbsp;Photos by
              <strong>
                <Link to="http://www.alicerowsome.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Alice Rowsome
                </Link>
              </strong>
              &nbsp;|&nbsp;
              Supported with <img src="/img/ico/hearts.svg" alt="LOVE"/>by
              <strong>
                <Link to="http://www.hackyourfuture.net"
                  target="_blank"
                  rel="noopener noreferrer">
                  HackYourFuture
                </Link>
              </strong>
            </div>
            <div className="vendor-license">
              Icons made by
              <Link to="http://www.flaticon.com/authors/flat-icons"
                title="Flat Icons"
                target="_blank"
                rel="noopener noreferrer">
                Flat Icons</Link> from
                <Link to="http://www.flaticon.com"
                  title="Flaticon"
                  target="_blank"
                  rel="noopener noreferrer">
                  www.flaticon.com
                </Link> is licensed by
                <Link to="http://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons BY 3.0"
                  target="_blank"
                  rel="noopener noreferrer">
                  CC 3.0 BY
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
)