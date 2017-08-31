import React from 'react';
import { Link } from 'react-router-dom';

import { TopSection } from '../components/TopSection';
import { BottomSection } from '../components/BottomSection';

export const Volunteers = () => {
  const volunteersText = (
    <div>
      <p>
        Welcome to a community where your knowledge and experience will help to
        transform the lives of refugees in the UK.
      </p>
      <p>
        We are looking for experienced web developers (HTML/CSS, JavaScript,
        Node, Angular, React, Database) to participate in our classes.
      </p>
      <p>
        We are also looking for technology managers and entrepreneurs to give
        workshops on modern software practices and methodologies.
      </p>

      <div className="section-bottom-link">
        <Link
          className="big-link-3 btn"
          to="/apply/mentor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become a Mentor
        </Link>
      </div>

      <p>
        Or you can become a volunteer and help us support the expansion of the
        organisation. No matter where you are in the UK, with your help we’ll
        create a local program to serve local refugee communities.
      </p>

      <BottomSection link="/apply/volunteer" linkText="Become a Volunteer" />
    </div>
  );

  return (
    <div>
      <TopSection title="Join Us" content={volunteersText} />
      <div className="mentors-hero-wrap" />
    </div>
  );
};
