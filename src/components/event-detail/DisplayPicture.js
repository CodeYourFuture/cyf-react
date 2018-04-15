import * as React from 'react';
import styled from 'react-emotion';
import type { User } from './types';

const PICTURE_SIZE = 60;

const Picture = styled('img')`
  max-height: ${PICTURE_SIZE}px;
  max-width: ${PICTURE_SIZE}px;
  border-radius: ${PICTURE_SIZE / 2}px;
  flex: 1;
  margin: 5px;
`;

export default ({ name, picture }: User) => (
  <Picture src={picture} alt={name} title={name} />
);
