import React from 'react';
import { shallow } from 'enzyme';

import SectionBody from './';

describe('SectionBody Component', () => {
  it('renders correctly', () => {
    expect(shallow(<SectionBody />)).toMatchSnapshot();
  });
});
