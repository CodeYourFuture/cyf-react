// @flow
import React from 'react';
import styled from 'react-emotion';
import type { ChildrenArray, Element } from 'react';

type Props = {
  children: ChildrenArray<Element<'p'>>,
};

const Container = styled('div')`
  & p {
    font-size: 18px;
    text-align: left;
  }
`;
const SectionBody = ({ children }: Props) => <Container>{children}</Container>;

export default SectionBody;
