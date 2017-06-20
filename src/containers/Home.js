import React from 'react'
import { AsSeen } from '../components/AsSeen'
import { Banner } from '../components/Banner'
import { WhatWeTeach } from '../components/WhatWeTeach'


export const Home = () => (
  <div className="Home">
    <div className="App-intro">
      <Banner />

      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 section-description">
          <p>We are a non-profit organisation supporting refugees with the dream of becoming developers.</p>
          <p>In their journey of interrupted lives, unfinished studies and integration challenges, many asylum seekers and refugees
          yearn to update their tech skills, but lack learning opportunities. <strong>We want to change this.</strong></p>
          <p>Last year we launched the first cohort of our  6-month web development programme, coached by a group of professional developers. Today we are running new classes in London and Glasgow. This is <strong>just the beginning</strong>. With your help we will be expanding to other regions and cities.</p>
          <p>If you are interested in participating as a <a href="students.html#info">student</a>, <a href="volunteers.html">coach or volunteer</a>, sign up!</p>
          <p>
          For all other inquiries please contact us at <a href="mailto:contact@codeyourfuture.co" title="Contact us">contact@codeyourfuture.co</a>
          <br /><br />
          </p>
        </div>
      </div>
    </div>

    <WhatWeTeach />
    <AsSeen />
  </div>
)

export default Home;


