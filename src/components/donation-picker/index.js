import React from 'react';
import {
  FormControl,
  InputGroup,
  FormGroup,
  ControlLabel,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import PropTypes from 'prop-types';

class DonationPicker extends React.Component {
  propTypes = {
    onTokenCapture: PropTypes.func
  };

  state = {
    amount: 20,
    token: null
  };

  updateAmount = e => {
    this.setState({
      amount: e.target.value
    });
  };

  checkout = () => {
    if (!window.StripeCheckout || !this.stripeHandler) {
      alert('Could not checkout, please try again soon!');
    }

    this.stripeHandler.open({
      name: 'CYF',
      description: 'Donation',
      zipCode: true,
      amount: this.state.amount * 100
    });
  };

  onTokenSuccess = token => {
    console.log('Token captured...', token);
    if (this.props.onTokenCapture) {
      this.props.onTokenCapture(token.id, this.state.amount);
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.stripeHandler = window.StripeCheckout.configure({
        key: process.env.REACT_APP_STRIPE_PUBLIC_KEY,
        image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        locale: 'auto',
        token: this.onTokenSuccess,
        currency: 'GBP',
        bitcoin: true
      });
    }, 1000);
  }

  render() {
    const { amount } = this.state;
    return (
      <div>
        <Row>
          <Col xs={12} md={6}>
            <FormGroup controlId="donationForm">
              <ControlLabel>How much would you like to give?</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>&pound;</InputGroup.Addon>
                <FormControl
                  type="number"
                  value={amount}
                  onChange={this.updateAmount}
                />
              </InputGroup>
              <FormControl.Feedback />
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <Button size="small" onClick={this.checkout}>
                Donate
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DonationPicker;
