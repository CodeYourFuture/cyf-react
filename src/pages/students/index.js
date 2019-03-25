import React from 'react';
import TopSection from '../../components/top-section';
import students from '../../assets/images/CYF-students.png';

const Students = () => {
  const studentText = (
    <div>
      <p>
        Welcome to our community. Here, you will learn all the technical skills
        needed to become a professional developer
      </p>
      <p>
        During the course you will learn the whole web development stack,
        including HTML/CSS, JavaScript, React and Node technologies. We’ll
        complement the training with workshops on modern software methodologies
        and job interview practices.
      </p>

      <p>
        Our 8-month web development program has proven a success. For our
        current course in London, we are partnering with Capgemini – a global
        consultancy organisation – to bring you the most comprehensive course
        possible. Exceptional graduates from the course will have an opportunity
        to join Capgemini.
      </p>

      <div className="section-bottom-link">
        <a className="big-link-3 btn scroll" href="#requirements">
          Find out more
        </a>
      </div>
    </div>
  );

  return (
    <div>
      <TopSection
        title="The beginning of your programming career"
        content={studentText}
      />
      <div>
        <img src={students} alt="code-your-future-students" />
      </div>

      <div id="info" className="block-2-container section-container">
        <div className="container">
          <div className="row">
            <div id="requirements" className="col-sm-6 col-md-6 block-2-box">
              <h3>Requirements</h3>
              <ul className="text-left">
                <li>No previous coding experience is required!</li>
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
                    <div className="col-sm-2">
                      <a
                        className="big-link-3 btn block-2-box-btn"
                        href="https://application-process.codeyourfuture.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 block-2-box">
              <h3 className="text-left">Start Learning Now</h3>
              <p>
                Although previous coding experience is not required, however, as
                part of the selection process, applicants are asked to learn the
                basics of coding.
              </p>

              <h4>
                <strong>From a computer/laptop/smartphone:</strong>
              </h4>
              <ul className="text-left">
                <li>
                  <strong>Step 1:</strong> Register your details on below link,
                  where you can also check your progress throughout the initial
                  selection process.
                  <a
                    target="_blank"
                    href="https://application-process.codeyourfuture.io/"
                    rel="noopener noreferrer"
                  >
                    https://application-process.codeyourfuture.io/
                  </a>
                </li>
                <li>
                  <strong>Step 2:</strong> Complete a first basic tutorial on
                  CSS/HTML/JavaScript using SoloLearn
                  (https://www.sololearn.com) app via Smartphone.
                </li>
                <li>
                  <strong>Step 3.</strong> Complete a second tutorial for
                  HTML/CSS on freecodecamp (
                  <a
                    target="_blank"
                    href="https://www.freecodecamp.org"
                    rel="noopener noreferrer"
                  >
                    https://www.freecodecamp.org
                  </a>
                  ) Responsive Web Design Certification excl. CSS Grid and
                  Responsive Web Design Projects
                </li>
                <li>
                  <strong>Step 4.</strong> Complete Tribute Page challenge
                </li>
                <li>
                  <strong>Step 5.</strong> Complete Product Landing Page and
                  receive feedback from mentors on how to improve it. Applicant
                  Guide:{' '}
                  <a
                    href="https://docs.google.com/document/d/1-xXNRjxKPYOnuYzRQaE67XgrGNqgIXHx0WwGYF1QUBA/edit"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </li>
                <li>
                  <strong>Step 6.</strong> Complete at least first iteration of
                  the Product Landing Page based on the Applicant Guide and
                  Webpage Checklist. After this step, you will be invited to
                  attend an interview day.
                </li>
                <li>
                  <strong>Step 7.</strong> Prepare a 300 words motivation letter
                  before the interview with focus on software development
                  industry opportunities.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
