// @flow
import React from 'react';
import { css } from 'emotion';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import { addMentor, fetchUsers } from '../../lib/events';
import type { CYFEvent } from '../../types';
import type Auth from '../../lib/auth';
import BackToEvent from './BackToEvent';
import Description from './Description';
import Location from './Location';
import LoginButton from '../LoginButton';
import Voluneers from './Volunteers';

const desktopMq = `@media (min-width: 840px)`;

const container = css({
  backgroundColor: '#f8f8f8',
  padding: '16px',
  textAlign: 'left',
  h1: {
    color: '#444',
    fontSize: '32px',
    fontWeight: 'normal',
    lineHeight: '1.13',
    margin: 0,
    paddingBottom: '4px',
    textTransform: 'none',
    [desktopMq]: {
      fontSize: '40px',
      lineHeight: '1.3',
    },
  },
  h2: {
    color: '#444',
    fontSize: '22px',
    fontWeight: '400',
    lineHeight: '1.45',
    margin: 0,
    paddingBottom: '16px',
    textTransform: 'none',
    [desktopMq]: {
      fontSize: '32px',
      lineHeight: '1.13',
    },
  },
  [desktopMq]: {
    padding: '60px 88px',
  },
});

const dateContainer = css({
  color: '#333',
  fontWeight: '500',
  'span:last-child': {
    display: 'block',
  },
  [desktopMq]: {
    fontSize: '18px',
    lineHeight: '1.56',
  },
});
const attendeeContainer = css({
  marginBottom: '36px',
  h3: {
    fontWeight: '400',
    color: '#333',
    lineHeight: '1.33',
    fontSize: '18px',
    margin: 0,
    marginBottom: '12px',
    textTransform: 'none',
    [desktopMq]: {
      fontSize: '22px',
      lineHeight: '1.45',
      marginBottom: '16px',
    },
  },
});

const attendButton = css({
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '1.33',
  color: '#2ba560',
  padding: '8px 16px',
  backgroundColor: 'white',
  border: '1px solid #2ba560',
  borderRadius: '8px',
  ':hover': {
    backgroundColor: '#207e49',
    color: '#fff',
  },
  ':active': {
    backgroundColor: '#2ba560',
    color: '#fff',
  },
});

const divider = css({
  marginBottom: '10px',
  borderTop: '1px solid #ddd',
  [desktopMq]: {
    marginBottom: '30px',
  },
});

function renderAttending(auth: Auth, mentors: string[], attendClick: Function) {
  if (auth.isAuthenticated()) {
    if (mentors.includes(auth.getUserID())) {
      return <div>You&#39;re attending! See you there!</div>;
    }
    return (
      <Button className={attendButton} onClick={attendClick}>
        Attend this event
      </Button>
    );
  }
  return (
    <div>
      Want to attend? Login to register.<br />
      <LoginButton auth={auth} />
    </div>
  );
}

type Props = CYFEvent & { auth: Auth };
type State = { mentors: string[], users: Object[] };

class EventDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { mentors: this.props.mentors || [], users: [] };
    this.refreshUsers(props.eventId);
  }

  refreshUsers = (eventId: string) => {
    fetchUsers(eventId).then(response => {
      this.setState({ users: response.data.users });
    });
  };

  attendClick = () => {
    const { mentors = [], auth, eventId } = this.props;
    const newMentors = [...mentors, auth.getUserID()];
    this.setState({ mentors: newMentors });
    addMentor(newMentors, eventId).then(() => {
      this.refreshUsers(eventId);
    });
  };

  render() {
    const {
      date,
      topic,
      description,
      location,
      startTime,
      endTime,
      auth,
    } = this.props;

    const { mentors, users } = this.state;

    return (
      <div className={container}>
        <h1>{topic}</h1>
        <p className={dateContainer}>
          <span>{date && moment(date).format('LL')}</span>
          <span>
            {startTime} - {endTime}
          </span>
        </p>
        <Location location={location} />
        <section className={attendeeContainer}>
          <h5>Volunteers: {(mentors || []).length}</h5>
          <Voluneers users={users} />
          {renderAttending(auth, mentors, this.attendClick)}
        </section>
        <hr className={divider} />
        <Description description={description} />
        <div>
          <BackToEvent />
        </div>
      </div>
    );
  }
}

export default EventDetail;
