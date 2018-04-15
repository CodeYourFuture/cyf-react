import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

import { EventPage } from './';

const mockEvent = {
  city: 'London',
  description: 'First bit of javascript',
  endDate: '1515851599504',
  intake: 'London Class 3',
  links: [
    {
      'course materials':
        'https://codeyourfuture.github.io/syllabus-master/js-core/week-04/lesson.html',
    },
  ],
  location: 'Ticketmaster',
  mentors: [],
  moduleLeaders: [{ name: 'Kash', avatar: 'something' }],
  startDate: '1515851599504',
  topic: 'Week 4 - Hello Javascript',
};

describe('Event Component', () => {
  it('renders', () => {
    const mockAuth = {
      isAuthenticated: () => true,
      getUserID: () => 'user|12345',
    };
    expect(
      renderer
        .create(
          <MemoryRouter>
            <EventPage {...mockEvent} auth={mockAuth} />
          </MemoryRouter>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
});
