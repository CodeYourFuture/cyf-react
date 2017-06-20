import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './Home';

jest.mock('react-router-dom', () => ({
  Link: () => <div></div>,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
