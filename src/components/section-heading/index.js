// @flow
import React from 'react';
import type { ChildrenArray, Element } from 'react';

type Props = {
  children: ChildrenArray<Element<'h1' | 'h2' | 'h3'>>,
};

const SectionHeading = ({ children }: Props) => <div>{children}</div>;

export default SectionHeading;
