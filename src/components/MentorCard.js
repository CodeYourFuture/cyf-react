import React from 'react';
import styled from 'styled-components';

const Mentor = styled.div`margin-bottom: 2em;`;

const Photo = styled.img`max-width: 100%;`;

const Name = styled.h4`margin-bottom: 0.2em;`;

const FirstName = styled.span`
  &::before,
  &::after {
    display: inline;
    color: #d12f2f;
    font-weight: bold;
  }

  &::before {
    content: '<';
  }

  &::after {
    content: '> ';
  }
`;

const Title = styled.div`color: gray;`;

export const MentorCard = ({
  className,
  firstName,
  lastName,
  photo,
  title
}) => (
  <Mentor className={className}>
    <Photo src={photo} alt={`${firstName} ${lastName}`} />

    <Name>
      <FirstName>{firstName}</FirstName>

      <span>{lastName}</span>
    </Name>

    <Title>{title}</Title>
  </Mentor>
);
