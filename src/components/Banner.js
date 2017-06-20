import React from 'react'
import { Link } from 'react-router-dom'

import '../stylesheets/index.scss'
//TODO: change hrefs to react-bootstrap links
export const Banner = () => (
  <div className="page-title">
    <div className="page-title-text">
      <h1>Coding School for Refugees</h1>
      <p>Learn to code and find a job</p>
      <div className="page-title-bottom-link">
        <Link to="students" className="big-link-2 btn">
          Apply Now
        </Link>
        <Link
           className="big-link-2 btn"
           to="volunteers"
           target="_blank"
           rel="noopener noreferrer">
          Become a volunteer
        </Link>
      </div>
    </div>
  </div>
)