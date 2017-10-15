import React from 'react';
import { AsSeen } from '../components/AsSeen';
import { Banner } from '../components/Banner';
import { WhatWeTeach } from '../components/WhatWeTeach';
import { Video } from '../components/Video';

export const Home = () => (
  <div className="Home">
    <div className="App-intro">
      <Banner />
    </div>
    <Video />
    <WhatWeTeach />
    <AsSeen />
  </div>
);
