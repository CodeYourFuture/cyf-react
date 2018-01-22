import React from 'react';
import { shallow } from 'enzyme';

import SectionHeading from './';

describe('SectionHeading Component', () => {
  it('renders correctly', () => {
    expect(shallow(<SectionHeading />)).toMatchSnapshot();
  });
});
