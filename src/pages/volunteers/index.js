// @flow
import React from 'react';
import InnerContainer from '../../components/inner-container';
import SectionBody from '../../components/section-body';
import SectionHeading from '../../components/section-heading';
import CYFLink from '../../components/link';
import Divider from '../../components/divider';
import Content from '../../content/volunteers';
import mentors from '../../assets/images/mentors.jpg';

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
        <ul>
          <li>
            <strong>Volunteers from virtually any background</strong> to help us
            run and grow our organisation.
          </li>
          <li>
            Professionals from the tech industry to join our{' '}
            <strong>mentorship programme</strong> and give a student guidance
            and support.
          </li>
          <li>
            <strong>Experienced web developers</strong> (HTML/CSS, JavaScript,
            Node, React, Databases) to help teach our classes.
          </li>
        </ul>
      </SectionBody>
      <CYFLink path="/apply" title="Become a Volunteer" />
    </InnerContainer>
    <div>
      <img src={mentors} alt="code-your-future-mentors" />
    </div>
  </div>
);

export default Volunteers;
