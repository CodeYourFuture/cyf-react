import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


import { Home } from './containers/Home'
import { Volunteers } from './pages/Volunteers'
import { Students } from './pages/Students'
import Event from './pages/Event'
import { Events } from './pages/Events'
import { Partners } from './pages/Partners'
import { About } from './pages/About'
import Apply from './pages/Apply'
import { MeetTheTeam } from './pages/MeetTheTeam'

import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

export const Routes = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/events" component={Events}/>
      <Route path="/event/:event_id" component={Event}/>
      <Route path="/students" component={Students}/>
      <Route path="/volunteers" component={Volunteers}/>
      <Route path="/apply/:form_type" component={Apply}/>
      <Route path="/partners" component={Partners}/>
      <Route path="/meet-the-team" component={MeetTheTeam}/>
      <Footer />
    </div>
  </Router>
)
