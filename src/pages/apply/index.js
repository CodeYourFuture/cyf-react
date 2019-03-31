import React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default () => (
  <Container>
    <iframe
      id="typeform-full"
      title="typeform-full"
      width="100%"
      height="100%"
      frameBorder="0"
      src="https://forms.codeyourfuture.io"
    />
  </Container>
);
