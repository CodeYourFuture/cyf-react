import React from 'react';
import { Link } from 'react-router-dom';

export const AsSeen = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-6">
        <h2>As seen in</h2>
        <div className="divider-1">
          <span />
        </div>
        <br />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3">
        <Link
          to="http://www.wired.co.uk/article/codeyourfuture-refugee-coding-school"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon--large">
            <img src="img/media-logos/wired.svg" alt="Wired" />
          </div>
        </Link>
      </div>
      <div className="col-sm-3">
        <Link
          to="http://www.unhcr.org/news/stories/2017/1/586e420c7/volunteers-train-refugees-to-crack-into-london-tech-industry.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon--large">
            <img src="img/media-logos/unhcr.png" alt="UNHCR" />
          </div>
        </Link>
      </div>
      <div className="col-sm-3">
        <Link
          to="https://www.newsdeeply.com/refugees/articles/2016/10/19/welcome-to-londons-refugee-coding-school"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon--large">
            <img
              src="img/media-logos/refugees-deeply.jpeg"
              alt="Refugees Deeply"
            />
          </div>
        </Link>
      </div>
      <div className="col-sm-3">
        <Link
          to="http://www.bbc.co.uk/programmes/p04yzrrg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon--large">
            <img src="img/media-logos/BBC.svg" alt="BBC" />
          </div>
        </Link>
      </div>
    </div>
  </div>
);
