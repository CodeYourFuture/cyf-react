// @flow

export type Auth = {
  userProfile: Function,
  getProfile: Function,
  isAuthenticated: Function,
  login: Function,
  logout: Function,
};

type Mentor = {
  name: string,
  avatar: string,
};

export type CYFEvent = {
  date: string,
  topic: string,
  description: string,
  endTime: string,
  eventId: string,
  links: Array<Object>,
  location: string,
  mentors: Array<string>,
  moduleLeaders: Array<Mentor>,
  startTime: string,
  title: string,
};
