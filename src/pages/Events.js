import React from 'react';
import { Link } from 'react-router-dom'
import { TopSection } from '../components/TopSection'
import { Event } from '../components/Event'

const SomeEvents = [
  {
    id: '1',
    date: 'Monday, Jun 19',
    time: '12:00 PM',
    location: 'Ticketmaster (Angel, London)',
    title: 'Javascript Module 1',
    mentors: ['Kash'],
    sponsors: ['Ticketmaster']
  },
  {
    id: '2',
    date: 'Tuesday, Jun 20',
    time: '12:00 PM',
    location: 'Ticketmaster (Angel, London)',
    title: 'Javascript Module 1',
    mentors: [{name: 'Kash', url: ''}],
    sponsors: [{name: 'Ticketmaster', url: ''}]
  }
]

const renderEvents = () => {
    return (
      SomeEvents.map((event) => {
        return (
          <Event key={event.id} {...event} />
        )
      })
    )
  }

export class Events extends React.Component {
  constructor(props) {
    super(props);

    this.handleAuth = this.handleAuth.bind(this);

    this.state = {
      isAuthenticated: false
    };
  }

  handleAuth() {
    // TODO: Add API

    this.setState({isAuthenticated: true});
  }

  render() {
    return (
      <div>
        {!this.state.isAuthenticated &&
          <div>
            <TopSection
              title="Events"
              content="Events and classes can only be viewed by students and mentors."/>

            <div className="col-sm-8 col-sm-offset-2 section-description">
              <div><strong>Please log in with:</strong></div>
              <Link className="big-link-3 btn" to="#" onClick={this.handleAuth}>
                  Github
              </Link>

              or

              <Link className="big-link-3 btn" to="#" onClick={this.handleAuth}>
                  Google
              </Link>
            </div>
          </div>
        }

        {this.state.isAuthenticated &&
          <div>
            <TopSection
              title="Events"
              content="Our current classes are done every Sunday in London and Edinburgh"/>
            <div className="col-sm-8 col-sm-offset-2 section-description">
              {renderEvents()}
            </div>
          </div>
        }
      </div>
    )
  }
}
