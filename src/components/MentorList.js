import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MentorCard } from './MentorCard';
import mentors from '../content/mentors';
import mediaQueries from '../variables/media-queries';

const Mentors = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Mentor = styled(MentorCard)`
  flex: 0 0 48%;

  @media (min-width: ${mediaQueries.sm}) {
    flex-basis: 30%;
  }
`;

const CallToActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 0 0 48%;

  @media (min-width: ${mediaQueries.sm}) {
    flex-basis: 30%;
  }
`;

const CallToAction = styled(Link)`
  white-space: normal;
  font-size: 1.2em;
  line-height: 1.3;
  margin-top: 33%;
`;

export const MentorList = () => (
  <Mentors id="mentors">
    {mentors.map(mentor => <Mentor {...mentor} />)}

    <CallToActionContainer>
      <CallToAction className="big-link-3 btn" to="/volunteers">
        Become a volunteer
      </CallToAction>
    </CallToActionContainer>
  </Mentors>
);
