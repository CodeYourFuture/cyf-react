// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import type { Auth } from '../../types';
import LoginButton from '../LoginButton';

import cyflogo from '../../assets/images/logos/cyf_brand.png';

const cyflogoStyle = {
  width: '158px',
  height: '50px',
};

const handleLink = linkName => {
  let URL = '';
  switch (linkName) {
    case 'blog':
      URL = 'https://medium.com/@CodeYourFuture';
      break;
    case 1:
      return;
    default:
      break;
  }
  window.open(URL, '_blank');
};

type Props = {
  auth: Auth,
};

const Navigation = ({ auth }: Props) => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Link to="/">
        <img src={cyflogo} style={cyflogoStyle} alt="logo" />
      </Link>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight onSelect={handleLink}>
        <LinkContainer to="/about">
          <NavItem eventKey={1}>About</NavItem>
        </LinkContainer>
        <LinkContainer to="/students">
          <NavItem eventKey={1}>Students</NavItem>
        </LinkContainer>
        <LinkContainer to="/volunteers">
          <NavItem eventKey={1}>Volunteers</NavItem>
        </LinkContainer>
        <LinkContainer to="/events">
          <NavItem eventKey={1}>Events</NavItem>
        </LinkContainer>
        <LinkContainer to="/partners">
          <NavItem eventKey={1}>Partners</NavItem>
        </LinkContainer>
        <LinkContainer to="/meet-the-team">
          <NavItem eventKey={1}>Meet the team</NavItem>
        </LinkContainer>
        <NavItem className="nav-icon" eventKey="blog">
          Blog
        </NavItem>
        <LinkContainer to="/donate">
          <NavItem className="nav-icon" eventKey={1}>
            <strong style={{ color: '#2ba560' }}>Donate</strong>
          </NavItem>
        </LinkContainer>
        <LoginButton auth={auth} />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
