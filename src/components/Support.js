import React from 'react';
import codeIcon from '../content/icons/code.svg';
import conferenceHallIcon from '../content/icons/conference-hall.svg';
import laptopIcon from '../content/icons/laptop.svg';

export const Support = () => (
  <div className="section-container">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6">
          <h2>Want to Contribute?</h2>
        </div>
        <div className="col-sm-6 col-md-6 block-box help-section">
          <h3 className="text-left">We are looking for</h3>
          <br />
          <ul className="text-left">
            <li>
              <span className="list-icon">
                <img src={conferenceHallIcon} alt="Space" />
              </span>Space
            </li>
            <li>
              <span className="list-icon">
                <img src={codeIcon} alt="Mentors" />
              </span>Mentors (Javascript)
            </li>
            <li>
              <span className="list-icon">
                <img src={laptopIcon} alt="Used Laptops" />
              </span>Used Laptops
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
