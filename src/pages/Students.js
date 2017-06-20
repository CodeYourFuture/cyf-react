import React from 'react'
import { Link } from 'react-router-dom'

import { TopSection } from '../components/TopSection'

export const Students = () => {
  const studentText = (
  <div>
    <p>Welcome to our community. Here, you will learn all the technical
      skills needed to become a professional developer.</p>
    <p>During the course you will learn the whole web development stack,
      including HTML/CSS, JavaScript and backend technologies. We’ll complement
      the training with workshops on modern software methodologies and job interview practices.</p>

    <p>Our 6-month web development programme follows the success of our affiliate organisation in Amsterdam,
      <Link to="http://hackyourfuture.net" target="_blank" rel="noopener noreferrer">
        HackYourFuture
      </Link>, where over 50% of the graduates have found technical jobs.</p>

    <div className="section-bottom-link">
      <Link className="big-link-3 btn scroll" to="/about">Find out more</Link>
    </div>
  </div>
)
return (
  <div>
  <TopSection title="The beginning of your programming career" content={studentText}/>
  <div className="student-hero-wrap"></div>

  <div id="info" className="block-2-container section-container">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6 block-2-box">
          <h3>Requirements</h3>
          <ul className="text-left">
            <li>Live in the UK</li>
            <li>Speak good English</li>
            <li>Ready to commit to over 30 hours of learning per week</li>
            <li>Availability for face to face sessions on weekends</li>
          </ul>
          <div className="apply-teaser">
            <div className="row">
              <div className="col-sm-5 col-md-4">
                <div className="teaser-description">
                    <strong>Interested?</strong>
                  </div>
              </div>
                <div className="col-sm-2">
                  <Link className="big-link-3 btn block-2-box-btn"
                    to="/apply/student"
                    target="_blank"
                    rel="noopener noreferrer">
                    Apply now
                  </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 block-2-box">
          <h3 className="text-left">Start Learning Now</h3>
          <p>As part of the selection process, applicants are asked to learn the basics of coding. No previous experience is required!</p>

          <h4><strong>From a computer/laptop:</strong></h4>
          <ul className="text-left">
            <li>Join&nbsp;
              <Link
                to="https://www.khanacademy.org/computing/computer-programming/html-css"
                target="_blank"
                rel="noopener noreferrer"
              >
                Khan Academy
              </Link>
              &nbsp;and complete Intro to HTML/CSS: Making webpages
            </li>
            <li>Join&nbsp;
              <Link
                to="https://www.freecodecamp.com/"
                target="_blank"
                rel="noopener noreferrer">
                FreeCodeCamp
              </Link>
              &nbsp;and complete a minimum of 20 hours on Front End Development</li>
          </ul>

          <h4><strong>From a smartphone:</strong></h4>
          <ul className="text-left">
            <li>Join&nbsp;
              <Link
                to="https://sololearn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SoloLearn app
              </Link>
              &nbsp;and complete the modules on HTML and CSS Fundamentals
            </li>
          </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
    )
}

