import React from 'react';
import { AuthLogin } from '../components/AuthLogin';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { TopSection } from '../components/TopSection';

const COLOR = { color: '#555' };

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} style={COLOR} />
    </FormGroup>
  );
}

export class CreateEvent extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {};
  }

  handleSubmit(event) {
    event.preventDefault();

    const { date, ...otherState } = this.state;

    window.FirebaseInitialized
      .database()
      .ref('events')
      .push({
        ...otherState,
        date: new Date(date).getTime(),
        attendees: {},
        mentors: {}
      })
      .then(response => {
        this.props.history.push('/events');
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <main className="container">
        <TopSection title="Create Event" />

        <AuthLogin>
          <div className="col-sm-8 col-sm-offset-2 block-2-box">
            <form onSubmit={this.handleSubmit}>
              <FieldGroup
                required
                name="title"
                type="text"
                label="Title (required)"
                placeholder="Enter text"
                onChange={this.handleChange}
                value={this.state.title}
              />

              <FormGroup controlId="description">
                <ControlLabel>Description (required)</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  name="description"
                  onChange={this.handleChange}
                  placeholder="Description..."
                  style={COLOR}
                  value={this.state.description}
                />
              </FormGroup>

              <FieldGroup
                label="When (required)"
                name="date"
                onChange={this.handleChange}
                type="datetime-local"
                value={this.state.date}
              />

              <FieldGroup
                label="Where (required)"
                name="location"
                onChange={this.handleChange}
                type="text"
                value={this.state.location}
              />

              <FieldGroup
                label="Sponsors"
                name="sponsors"
                onChange={this.handleChange}
                type="text"
                value={this.state.sponsors}
              />

              <Button type="submit">Create</Button>
            </form>
          </div>
        </AuthLogin>
      </main>
    );
  }
}
