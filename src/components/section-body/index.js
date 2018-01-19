// @flow
import React from 'react';
import type { ChildrenArray, Element } from 'react';

type Props = {
  children: ChildrenArray<Element<'p'>>,
};

const SectionBody = ({ children }: Props) => <div>{children}</div>;

export default SectionBody;
