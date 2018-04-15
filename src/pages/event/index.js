import React, { Component } from 'react';
import Page from '../../components/page';
import InnerContainer from '../../components/inner-container';
import EventDetail from '../../components/event-detail';
import Spinner from '../../components/spinner';
import { fetchEvent } from '../../lib/events';
import type { CYFEvent } from '../../types';
import type Auth from '../lib/auth';

export const EventPage = ({ event, auth }: { event: CYFEvent, auth: Auth }) => (
  <Page>
    <InnerContainer>
      <EventDetail {...event} auth={auth} />
    </InnerContainer>
  </Page>
);
type Props = { auth: Auth };

type State = {
  event: CYFEvent,
  loading: true,
};

class EventContainer extends Component<Props, State> {
  state = {
    event: {
      startDate: '1515951599504',
    },
    loading: true,
  };

  componentDidMount() {
    const [eventId] = window.location.pathname.split('/').slice(-1);
    fetchEvent(eventId).then(event => {
      this.setState({
        event: event.data,
        loading: false,
      });
    });
  }

  render() {
    return this.state.loading ? (
      <Page>
        <Spinner name="circle" />
      </Page>
    ) : (
      <Page>
        <InnerContainer>
          <EventPage {...this.state.event} auth={this.props.auth} />
        </InnerContainer>
      </Page>
    );
  }
}

export default EventContainer;
