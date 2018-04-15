// @flow
import React from 'react';
import styled from 'react-emotion';
import DisplayPicture from './DisplayPicture';
import type { User as UserType } from './types';

const Container = styled('div')`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export default ({ users }: { users: UserType[] }) => (
  <Container>
    {users.map(user => <DisplayPicture key={user.user_id} {...user} />)}
  </Container>
);
