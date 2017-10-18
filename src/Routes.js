import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './containers/Home';
import { Volunteers } from './pages/Volunteers';
import { Students } from './pages/Students';
import Event from './pages/Event';
import { CreateEvent } from './pages/CreateEvent';

import { Events } from './pages/Events';
import { Partners } from './pages/Partners';
import { About } from './pages/About';
import Apply from './pages/Apply';
import { MeetTheTeam } from './pages/MeetTheTeam';

import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export const Routes = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/events/:event_id" component={Event} />
      <Route exact path="/event/create" component={CreateEvent} />
      <Route exact path="/students" component={Students} />
      <Route exact path="/volunteers" component={Volunteers} />
      <Route exact path="/apply/:form_type" component={Apply} />
      <Route exact path="/partners" component={Partners} />
      <Route exact path="/meet-the-team" component={MeetTheTeam} />
      <Footer />
    </div>
  </Router>
);
