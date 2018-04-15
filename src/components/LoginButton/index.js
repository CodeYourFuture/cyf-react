import React from 'react';
import styled from 'react-emotion';
import { Button } from 'react-bootstrap';
import type Auth from '../lib/auth';

const LoginWrapper = styled('div')`
  display: inline-block;
  width: 90px;
`;

export default ({ auth }: { auth: Auth }) => (
  <LoginWrapper>
    {!auth.isAuthenticated() && (
      <Button bsStyle="default" onClick={auth.login}>
        Log In
      </Button>
    )}
    {auth.isAuthenticated() && (
      <Button bsStyle="default" onClick={auth.logout}>
        Log Out
      </Button>
    )}
  </LoginWrapper>
);
