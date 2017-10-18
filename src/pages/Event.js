import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { AuthLogin } from '../components/AuthLogin';
import { TopSection } from '../components/TopSection';

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.addAttendee = this.addAttendee.bind(this);
    this.setUser = this.setUser.bind(this);
    this.removeAttendee = this.removeAttendee.bind(this);

    this.state = {
      event: {},
      user: undefined
    };
  }

  componentWillMount() {
    const { event_id } = this.props.match.params;

    window.FirebaseInitialized
      .database()
      .ref('events/' + event_id)
      .on('value', response => {
        this.setState({
          event: response.val()
        });
      });
  }

  addAttendee() {
    let type = 'attendees';

    if (this.state.user.mentor) {
      type = 'mentors';
    }

    window.FirebaseInitialized
      .database()
      .ref('events/' + this.props.match.params.event_id + '/' + type)
      .child(this.state.user.uid)
      .set(this.state.user.displayName || this.state.user.email);
  }

  removeAttendee() {
    let type = 'attendees';

    if (this.state.user.mentor) {
      type = 'mentors';
    }

    window.FirebaseInitialized
      .database()
      .ref('events/' + this.props.match.params.event_id + '/' + type)
      .child(this.state.user.uid)
      .set(null);
  }

  setUser(user) {
    this.setState({ user });
  }

  render() {
    const {
      attendees = {},
      date,
      description,
      location,
      title,
      mentors = {}
    } = this.state.event;

    const { user = {} } = this.state;

    const attending = attendees[user.uid] || mentors[user.uid];

    return (
      <div>
        <TopSection content={description} title={title} />
        <div className="col-sm-8 col-sm-offset-2 section-description">
          <div>
            <h4>When: </h4>
            {moment(date).format('MMMM Do YYYY, h:mm a')}
          </div>

          <div>
            <h4>Where: </h4>
            {location}
          </div>

          <div className="row">
            <h4>Mentors: </h4>

            {Object.keys(mentors).map(mentorId => (
              <span key={mentorId} className="medium-6 columns">
                {mentors[mentorId]}
              </span>
            ))}
          </div>

          <div>
            <h4>Number of Attendees: </h4>
            {Object.keys(attendees).length + Object.keys(mentors).length}
          </div>

          <div>
            <h4>Are you going?</h4>

            <AuthLogin onAuth={this.setUser}>
              <Link
                className={attending ? 'btn-success btn' : 'btn'}
                disabled={attending}
                to="#"
                onClick={this.addAttendee}
              >
                Yes
              </Link>

              <Link
                className={!attending ? 'btn-success btn' : 'btn'}
                disabled={!attending}
                to="#"
                onClick={this.removeAttendee}
              >
                No
              </Link>
            </AuthLogin>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
