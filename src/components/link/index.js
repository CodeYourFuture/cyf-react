// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  path: string,
  title: string,
};

const CYFLink = ({ path, title }: Props) => (
  <div className="section-bottom-link">
    {path.indexOf('http') === 0 ? (
      <a
        className="big-link-3 btn"
        href={path}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    ) : (
      <Link
        className="big-link-3 btn"
        to={path}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </Link>
    )}
  </div>
);

export default CYFLink;
