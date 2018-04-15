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
  <div className={eventDescription}>
    {description &&
      description
        .split('\n')
        // eslint-disable-next-line react/no-array-index-key
        .map((text, index) => <p key={text + index}>{text}</p>)}
  </div>
);
