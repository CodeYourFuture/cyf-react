import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './lib/history';

import {
  About,
  Apply,
  ApplySuccess,
  Donate,
  Event,
  Events,
  CreateEvent,
  Home,
  MeetTheTeam,
  Partners,
  Students,
  Volunteers,
} from './pages';

import Auth from './lib/auth';
import Callback from './components/callback';
import Footer from './components/footer';
import Navigation from './components/navigation';

const auth = new Auth();

const handleAuthentication = nextState => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const Routes = () => (
  <Router history={history} component={Home}>
    <div>
      <Navigation auth={auth} />
      <Route exact path="/" component={Home} />
      <Route exact path="/index.html" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/event/create" component={CreateEvent} />
      <Route
        exact
        path="/events/:event_id"
        render={props => <Event {...props} auth={auth} />}
      />
      <Route exact path="/students" component={Students} />
      <Route exact path="/students.html" component={Students} />
      <Route exact path="/volunteers" component={Volunteers} />
      <Route exact path="/volunteers.html" component={Volunteers} />
      <Route exact path="/apply/:formType" component={Apply} />
      <Route exact path="/apply/success/:formType" component={ApplySuccess} />
      <Route exact path="/partners" component={Partners} />
      <Route exact path="/partners.html" component={Partners} />
      <Route exact path="/meet-the-team" component={MeetTheTeam} />
      <Route exact path="/meet-the-team.html" component={MeetTheTeam} />
      <Route exact path="/donate" component={Donate} />
      <Route
        path="/callback"
        render={props => {
          handleAuthentication(props);
          return <Callback {...props} />;
        }}
      />
      <Footer />
    </div>
  </Router>
);

export default Routes;
