import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

const backToEventLink = css({
  lineHeight: '1.5',
  fontSize: '16px',
  fontWeight: '400',
  color: '#333',
  marginTop: '32px',
  borderBottom: '1px solid',
  display: 'inline-block',
  paddingBottom: '3px',
});

export default () => (
  <Link to="/events" className={backToEventLink}>
    Back to event listing
  </Link>
);
