import React from 'react';
import { shallow } from 'enzyme';

import CYFLink from './';

describe('CYFLink Component', () => {
  it('renders internal links correctly', () => {
    expect(
      shallow(<CYFLink path="/apply" title="Become a Mentor" />),
    ).toMatchSnapshot();
  });

  it('renders external links correctly', () => {
    expect(
      shallow(<CYFLink path="https://codeyourfuture.io" title="Homepage" />),
    ).toMatchSnapshot();
  });

  it('renders external links correctly', () => {
    expect(
      shallow(<CYFLink path="https://codeyourfuture.io" title="Homepage" />),
    ).toMatchSnapshot();
  });
});
