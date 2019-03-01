// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import TopSection from '../../components/top-section';

const AboutText = (
  <div>
    <p>
      We are a non-profit organisation supporting refugees and underprivileged
      individuals with the dream of becoming developers.
    </p>
    <p>
      In their journey of interrupted lives, unfinished studies and integration
      challenges, many of these individuals yearn to update their tech skills,
      but lack learning opportunities. <strong>We want to change this.</strong>
    </p>
    <p>
      In 2016 we launched the first cohort of our 6-month web development
      programme, coached by a group of professional developers. Today we are
      running the fifth class in London, the third class in Glasgow and the
      second class in Manchester. We also have new classes setting up in Rome
      and Bogotá. This is <strong>just the beginning</strong>. With your help we
      will be expanding to other regions and cities.
    </p>
    <p>
      If you are interested in participating as a{' '}
      <Link to="students">student</Link>,{' '}
      <Link to="volunteers">coach or volunteer</Link>, sign up!
    </p>
    <p>
      For all other inquiries please contact us at{' '}
      <Link to="mailto:contact@codeyourfuture.io" title="Contact us">
        contact@codeyourfuture.io
      </Link>
      <br />
      <br />
    </p>
  </div>
);

const About = () => (
  <main>
    <TopSection title="About Us" content={AboutText} />
  </main>
);

export default About;
