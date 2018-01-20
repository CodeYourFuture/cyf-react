// @flow
import React from 'react';
import InnerContainer from '../../components/inner-container';
import SectionBody from '../../components/section-body';
import SectionHeading from '../../components/section-heading';
import CYFLink from '../../components/link';
import Divider from '../../components/divider';
import Content from '../../content/volunteers';
import mentors from '../../assets/images/mentors-group.jpg';

const Volunteers = () => (
  <div>
    <InnerContainer>
      <SectionHeading>
        <h2>{Content.Volunteers.Heading}</h2>
      </SectionHeading>
      <Divider />
      <SectionBody>
        <p>{Content.Volunteers.Body.One}</p>
        <p>{Content.Volunteers.Body.Two}</p>
        <p>{Content.Volunteers.Body.Three}</p>
      </SectionBody>
      <CYFLink path="/apply/mentor" title="Become a Mentor" />
      <SectionBody>
        <p>{Content.Volunteers.Body.Four}</p>
      </SectionBody>
      <CYFLink path="/apply/volunteer" title="Become a Volunteer" />
    </InnerContainer>
    <div>
      <img src={mentors} alt="code-your-future-mentors" />
    </div>
  </div>
);

export default Volunteers;
