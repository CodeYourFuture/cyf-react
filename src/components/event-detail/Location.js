import React from 'react';
import { css } from 'emotion';

const addressContainer = css({
  color: '#777',
  marginBottom: '32px',
  lineHeight: '1.4',
  fontSize: '18px',
  fontWeight: '400',
  '@media (min-width: 840px)': {
    fontSize: '18px',
    lineHeight: '1.56',
  },
});

export default ({ location }: { location: string }) => (
  <div className={addressContainer}>
    <p>
      <span>{location}</span>
    </p>
  </div>
);
