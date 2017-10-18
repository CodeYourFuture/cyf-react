import React from 'react';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

export class AuthLogin extends React.Component {
  constructor(props) {
    super(props);

    this.handleAuth = this.handleAuth.bind(this);

    this.state = {
      user: null
    };
  }

  componentWillMount() {
    window.FirebaseInitialized.auth().onAuthStateChanged(user => {
      if (user) {
        window.FirebaseInitialized
          .database()
          .ref('users/' + user.uid)
          .once('value')
          .then(response => {
            const value = response.val();

            if (value) {
              const { admin = false, mentor = false } = value;

              user.admin = admin;
              user.mentor = mentor;

              this.props.onAuth(user);
              this.setState({ user });
            }
          });
      }
    });
  }

  addUserToFirebase(user) {
    window.FirebaseInitialized
      .database()
      .ref('users/' + user.uid)
      .set({
        email: user.email,
        name: user.displayName
      });
  }

  handleAuth() {
    const provider = new firebase.auth.GithubAuthProvider();

    window.FirebaseInitialized
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        this.addUserToFirebase(user);

        this.setState({ user });

        this.props.onAuth(user);
      })
      .catch(error => {
        alert('An error has occured');
      });
  }

  render() {
    return (
      <div>
        {this.state.user &&
          (this.props.admin ? this.state.user.admin : true) &&
          this.props.children}

        {!this.state.user && (
          <div className="col-sm-8 col-sm-offset-2 section-description">
            <div>
              <strong>Please log in to continue:</strong>
            </div>

            <Link className="big-link-3 btn" to="#" onClick={this.handleAuth}>
              Github
            </Link>
          </div>
        )}
      </div>
    );
  }
}

AuthLogin.defaultProps = {
  admin: false,
  onAuth: () => {}
};
