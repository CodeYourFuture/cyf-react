import React from 'react';
import styled from 'styled-components';
import { MentorCard } from './MentorCard';
import mentors from '../content/mentors';
import mediaQueries from '../variables/media-queries'

const Mentors = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Mentor = styled(MentorCard)`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 48%;

  @media (min-width: ${mediaQueries.sm}) {
    flex-basis: 30%;
  }
`;

export const MentorList = () => (
  <Mentors id="mentors">
    {mentors.map(mentor => <Mentor {...mentor} />)}
  </Mentors>
);
