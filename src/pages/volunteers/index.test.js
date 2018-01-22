import React from 'react';
import { shallow } from 'enzyme';
import Volunteers from './';

describe('Volunteers Page', () => {
  it('renders correctly', () => {
    expect(shallow(<Volunteers />)).toMatchSnapshot();
  });
});
