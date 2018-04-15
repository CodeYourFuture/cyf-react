import axios from 'axios';
import type { AxiosPromise } from 'axios';
import type { CYFEvent } from '../../types';
import Auth from '../../lib/auth';

export type FetchEvents = string => Promise<CYFEvent>;

export async function createEvent(
  payload: Object,
  fetchFn: AxiosPromise = axios,
): Promise<CYFEvent> {
  if (!process.env.REACT_APP_EVENTS_URL) {
    throw new Error(
      'Oi Oi Please specify a valid environmental variable for EVENTS_URL',
    );
  }
  const auth = new Auth();
  const idToken = auth.getIDToken();

  if (!idToken) {
    throw new Error('User is not logged in');
  }

  const res = await fetchFn(`${process.env.REACT_APP_EVENTS_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
    data: JSON.stringify(payload),
  });
  return res;
}
export async function addMentor(
  mentors: string[],
  eventId: string,
  fetchFn: AxiosPromise = axios,
): Promise<CYFEvent> {
  if (!process.env.REACT_APP_EVENTS_URL) {
    throw new Error(
      'Oi Oi Please specify a valid environmental variable for EVENTS_URL',
    );
  }
  const auth = new Auth();
  const idToken = auth.getIDToken();

  if (!idToken) {
    throw new Error('User is not logged in');
  }

  const res = await fetchFn(`${process.env.REACT_APP_EVENTS_URL}/${eventId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
    data: JSON.stringify({ mentors }),
  });
  return res;
}
export async function fetchEvents(
  fetchFn: AxiosPromise = axios,
): Promise<CYFEvent> {
  if (!process.env.REACT_APP_EVENTS_URL) {
    throw new Error(
      'Oi Oi Please specify a valid environmental variable for EVENTS_URL',
    );
  }
  const res = await fetchFn(`${process.env.REACT_APP_EVENTS_URL}`);

  return res;
}

export async function fetchEvent(
  eventId: string,
  fetchFn: AxiosPromise = axios,
): Promise<CYFEvent> {
  if (!process.env.REACT_APP_EVENTS_URL) {
    throw new Error(
      'Oi Please specify a valid environmental variable from EVENTS_URL',
    );
  }
  const res = await fetchFn(`${process.env.REACT_APP_EVENTS_URL}/${eventId}`);
  return res;
}

export async function fetchUsers(
  eventId: string,
  fetchFn: AxiosPromise = axios,
): Promise<CYFEvent> {
  if (!process.env.REACT_APP_EVENTS_URL) {
    throw new Error(
      'Oi Please specify a valid environmental variable from EVENTS_URL',
    );
  }
  const res = await fetchFn(
    `${process.env.REACT_APP_EVENTS_URL}/${eventId}/users`,
  );
  return res;
}

export const sortEventsByDate = events => {
  const array = events.reduce((acc, event) => {
    const eventDate = event.date;
    const foundDate = acc.findIndex(date => date.date === eventDate);
    if (foundDate > -1) {
      acc[foundDate].events = acc[foundDate].events.concat([event]);
      return acc;
    }
    return acc.concat([{ date: event.date, events: [event] }]);
  }, []);

  const getTime = event => new Date(event.date).getTime();

  return array.sort((a, b) => {
    if (getTime(a) < getTime(b)) {
      return -1;
    }
    if (getTime(a) > getTime(b)) {
      return 1;
    }
    return 0;
  });
};
