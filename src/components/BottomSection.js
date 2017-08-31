import React from 'react';
import { Link } from 'react-router-dom';

export const BottomSection = ({ link, linkText }) => (
  <div className="section-bottom-link">
    <Link
      className="big-link-3 btn"
      to={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkText}
    </Link>
  </div>
);
