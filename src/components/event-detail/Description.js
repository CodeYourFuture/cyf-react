// @flow
import * as React from 'react';
import { css } from 'emotion';

const eventDescription = css({
  marginBottom: '16px',
  fontSize: '16px',
  lineHeight: '1.5',
  maxWidth: '580px',
});

export default ({ description }: { description: string }) => (
  <p className={eventDescription}>
    {description &&
      description.split('\n').map(text => (
        <React.Fragment>
          {text}
          <br />
        </React.Fragment>
      ))}
  </p>
);
