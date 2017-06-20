import React from 'react';
import './index.css';

export const MentorCard = ({firstName, lastName, photo, title}) => (
  <div className="col-xs-6 col-sm-4 mentor">
    <img className="mentor-image" src={photo} alt={`${firstName} ${lastName}`} />

    <h4 className="mentor-name">
      <span className="mentor-first-name">
        {firstName}
      </span>

      <span className="mentor-last-name">
        {lastName}
      </span>
    </h4>

    <div className="mentor-title">
      {title}
    </div>
  </div>
);
