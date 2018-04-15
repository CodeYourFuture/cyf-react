/* eslint-disable class-methods-use-this */
import auth0 from 'auth0-js';
import AUTH_CONFIG from './auth0-variables';
import history from '../history';

class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.redirectUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile',
  });

  userProfile;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    localStorage.setItem('authCallback', window.location.href);
    this.auth0.authorize();
  }

  redirect() {
    const authCallback = localStorage.getItem('authCallback');
    if (authCallback) {
      window.location.href = authCallback;
    } else {
      history.replace('/');
    }
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.redirect();
      } else if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        this.redirect();
      }
    });
  }

  setSession(authResult) {
    // eslint-disable-next-line
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('sub', authResult.idTokenPayload.sub);
    history.replace('/home');
  }

  getUserID() {
    const value = localStorage.getItem('sub');
    if (!value) {
      throw new Error('No sub found');
    }
    return value;
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  getIDToken() {
    const token = localStorage.getItem('id_token');
    if (!token) {
      throw new Error('No ID token found');
    }
    return token;
  }

  getProfile(cb) {
    const accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.userProfile = null;
    history.replace('/');
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}

export default Auth;
