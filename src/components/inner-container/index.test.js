import React from 'react';
import { shallow } from 'enzyme';

import InnerContainer from './';

describe('InnerContainer Component', () => {
  it('renders correctly', () => {
    expect(shallow(<InnerContainer />)).toMatchSnapshot();
  });
});
