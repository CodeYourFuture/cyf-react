import React from 'react';
import { shallow } from 'enzyme';

import Divider from './';

describe('Divider Component', () => {
  it('renders correctly', () => {
    expect(shallow(<Divider />)).toMatchSnapshot();
  });
});
