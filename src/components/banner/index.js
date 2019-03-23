import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import homepagebanner from '../../assets/images/CYF-homepage.png';

import '../../stylesheets/index.scss';

const Hero = styled('div')`
  position: relative;
`;
const BannerImage = styled('img')`
  width: 100%;
  object-fit: cover;
  height: 600px;
`;

const BannerText = styled('div')`
  margin: 0 auto;
  background-color: rgba(62, 100, 132, 0.42);
  padding: 10px;
  color: #fff;
  position: absolute;
  width: 100%;
  top: 20%;

  > h1 {
    color: #fff;
  }
`;

const Banner = () => (
  <Hero>
    <BannerImage src={homepagebanner} alt="teaching=refugees-to-code" />
    <BannerText>
      <h1>
        Coding School for Refugees, Disadvantaged and Underprivileged People
      </h1>
      <p>Learn to code and find a job</p>
      <div className="page-title-bottom-link">
        <Link to="students" className="big-link-2 btn">
          Apply Now
        </Link>
        <Link to="volunteers" className="big-link-2 btn">
          Become a volunteer
        </Link>
      </div>
    </BannerText>
  </Hero>
);

export default Banner;
