// @flow
import React from 'react';
import styled from 'react-emotion';
import type { ChildrenArray, Element } from 'react';

type Props = {
  children: ChildrenArray<Element<'p' | 'ul'>>,
};

const Container = styled('div')`
   {
    font-size: 18px;
    text-align: left;
  }
  & ul {
    padding-left: 1em;
  }
  & li {
    margin-bottom: 0.5em;
  }
`;
const SectionBody = ({ children }: Props) => <Container>{children}</Container>;

export default SectionBody;
