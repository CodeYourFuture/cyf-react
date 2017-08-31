import React from 'react';
import { Link } from 'react-router-dom'
import { TopSection } from '../components/TopSection'

const SomeEvents = [
  {
    attending: true,
    attendeesCount: 13,
    id: '1',
    date: 'Monday, Jun 19',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    time: '12:00 PM',
    location: 'Ticketmaster (Angel, London)',
    title: 'Javascript Module 1',
    mentors: [{name:'Kash', id: 1}, {name:'Bryce', id: 2}],
    sponsors: ['Ticketmaster']
  },
  {
    attending: false,
    attendeesCount: 13,
    id: '2',
    date: 'Tuesday, Jun 20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    time: '12:00 PM',
    location: 'Ticketmaster (Angel, London)',
    title: 'Javascript Module 1',
    mentors: [{name: 'Kash', id: 1, url: ''}],
    sponsors: [{name: 'Ticketmaster', url: ''}]
  }
];

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.addAttendee = this.addAttendee.bind(this);
    this.removeAttendee = this.removeAttendee.bind(this);

    this.state = {
      event: {}
    }

    this.getEvent().then(
      event => this.setState({event})
    );
  }

  addAttendee() {
    // TODO: Add API


    // placholder for setting state
    if (this.props.currentUser.mentor) {
      const mentors = [...this.state.event.mentors, this.props.currentUser];

      this.setState({
        event: {...this.state.event, attending: true, mentors}
      })
    }
    else {
      this.setState({
        event: {...this.state.event, attending: true, attendeesCount: this.state.event.attendeesCount + 1}
      })
    }
  }

  getEvent() {
    const {event_id} = this.props.match.params;


    // TODO: Add API
    return Promise.resolve(
      SomeEvents.find(item => item.id === event_id)
    )
  }

  removeAttendee() {
    // TODO: Add API

    // placholder for setting state
    if (this.props.currentUser.mentor) {
      const mentors = this.state.event.mentors.filter(
        mentor => mentor.id !== this.props.currentUser.id
      );

      this.setState({
        event: {...this.state.event, attending: false, mentors}
      })
    }
    else {
      this.setState({
        event: {...this.state.event, attending: false, attendeesCount: this.state.event.attendeesCount - 1}
      })
    }
  }

  render() {
    const {attending, attendeesCount, date, time, description, location, title, mentors = []} = this.state.event;

    return (
      <div>
        <TopSection content={description} title={title} />
          <div className="col-sm-8 col-sm-offset-2 section-description">
            <div>
              <strong>Date:</strong>
              {date}
            </div>

            <div>
              <strong>Time:</strong>
              {time}
            </div>

            <div>
              <strong>Location:</strong>
              {location}
            </div>

            <div className="row">
              <strong>Mentors:</strong>

              {mentors.map(
                mentor => (
                    <span key={mentor.id} className="medium-6 columns">
                        {mentor.name}
                    </span>
                )
              )}
            </div>

            <div>
              <strong>Number of Attendees:</strong>
              {attendeesCount}
            </div>

            <div>
              <div>
                Are you going?
              </div>

              <Link className="big-link-3 btn" disabled={attending} to="#" onClick={this.addAttendee}>
                  Yes
              </Link>
              <Link className="big-link-3 btn" disabled={!attending} to="#" onClick={this.removeAttendee}>
                  No
              </Link>
            </div>
          </div>
        </div>
      )
  }
}

Event.defaultProps = {
  currentUser: {mentor: true, name:'Bryce', id: 2}
}

export default Event;
