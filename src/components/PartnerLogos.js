import React from 'react';
import styled from 'styled-components';
import partners from '../content/partners';

const Feature = styled.div`padding-bottom: 50px;`;

export const PartnerLogos = () => (
  <section className="section-container section-container-gray">
    <div className="container">
      <Feature className="row">
        <div className="col-sm-10 col-sm-offset-1 ticketmaster-wrap">
          <a
            href={partners.ticketmaster.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid"
              src={partners.ticketmaster.logo}
              alt={partners.ticketmaster.name}
            />
          </a>
        </div>
      </Feature>

      <div className="row">
        <div className="col-sm-4 col-md-4 col-sm-offset-2 col-md-offset-2">
          <a
            href={partners.cititec.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={partners.cititec.logo} alt={partners.cititec.name} />
          </a>
        </div>

        <div className="col-sm-4 col-md-4">
          <a
            href={partners.pipedrive.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="240px"
              height="52.6px"
              src={partners.pipedrive.logo}
              alt={partners.pipedrive.name}
            />
          </a>
        </div>
      </div>
    </div>
  </section>
);
