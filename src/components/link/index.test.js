import React from 'react';
import { shallow } from 'enzyme';

import CYFLink from './';

describe('CYFLink Component', () => {
  it('renders correctly', () => {
    expect(
      shallow(<CYFLink path="/apply/mentor" title="Become a Mentor" />),
    ).toMatchSnapshot();
  });
});
