import React from 'react';
import mediaOutlets from '../../content/media-outlets';

type Props = {
  url: string,
  src: string,
  alt: string,
};
const Outlet = ({ url, src, alt }: Props) => (
  <div className="col-sm-3">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="icon--large">
        <img src={src} alt={alt} />
      </div>
    </a>
  </div>
);

const AsSeen = () => (
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
      {mediaOutlets &&
        mediaOutlets.map(x => (
          <Outlet key={x.src} src={x.src} url={x.url} alt={x.alt} />
        ))}
    </div>
  </div>
);

export default AsSeen;
