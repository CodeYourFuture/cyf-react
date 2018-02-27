import React from 'react';
import { Elements } from 'react-stripe-elements';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = styled('div')`
  max-width: 420px;
`;

const PeriodButtonsContainer = styled('div')`
  display: flex;
`;

const PeriodButton = styled('label')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 50%;
  font-weight: 900;
  background-color: ${props => (props.active ? 'rgb(43, 165, 96)' : null)};
  color: ${props => (props.active ? 'white' : null)};
  border-radius: ${props => (props.isLeft ? '6px 0 0 6px' : '0 6px 6px 0')};
  border: solid;
  border-width: ${props =>
    props.isLeft ? '1px 0px 1px 1px' : '1px 1px 1px 0px'};
  border-color: rgb(204, 204, 204);
`;

const PickerContainer = styled('div')`
  margin-top: 20px;
  height: 240px;
  display: flex;
  flex-direction: column;
`;

const DonationLabel = styled('div')`
  background-color: rgb(244, 245, 240);
  border-style: solid;
  border-width: 0.5px 0.5px 0px 0.5px;
  border-color: rgb(204, 204, 204);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-weight: 1000;
  font-size: 1.5rem;
  padding: 16px;
`;

const DonationBox = styled('div')`
  border-style: solid;
  border-width: 0.5px 0.5px 0.5px 0.5px;
  border-color: rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;

const InputContainer = styled('div')`
  width: 85%;
  margin-bottom: 24px;
`;

const DonateButton = styled(Button)`
  width: 85%;
  font-size: 2.2rem;
  font-weight: 900;
  height: 200px;
`;

const MonthlyMessageContainer = styled('div')`
  width: 80%;
`;

class DonationPicker extends React.Component {
  state = {
    amount: 20,
    // eslint-disable-next-line react/no-unused-state
    token: null,
    isOnceButtonSelected: true,
  };

  componentDidMount() {
    setTimeout(() => {
      if (window.StripeCheckout) {
        this.stripeHandler = window.StripeCheckout.configure({
          key: process.env.REACT_APP_STRIPE_PUBLIC_KEY,
          image:
            'https://stripe.com/img/documentation/checkout/marketplace.png',
          locale: 'auto',
          token: this.onTokenSuccess,
          currency: 'GBP',
          bitcoin: true,
        });
      }
    }, 1000);
  }

  onTokenSuccess = token => {
    if (this.props.onTokenCapture) {
      this.props.onTokenCapture(token.id, this.state.amount);
    }
  };

  checkout = () => {
    if (!window.StripeCheckout || !this.stripeHandler) {
      // eslint-disable-next-line no-alert
      alert('Could not checkout, please try again soon!');
    }

    this.stripeHandler.open({
      name: 'CYF',
      description: 'Donation',
      zipCode: true,
      amount: this.state.amount * 100,
    });
  };

  updateAmount = e => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const { amount } = this.state;
    const labelText = this.state.isOnceButtonSelected
      ? 'How much would you like to give?'
      : 'How much would you like to give every month?';

    return (
      <Container>
        <PeriodButtonsContainer>
          <PeriodButton
            active={this.state.isOnceButtonSelected}
            onClick={() => this.setState({ isOnceButtonSelected: true })}
            isLeft
          >
            GIVE ONCE
          </PeriodButton>
          <PeriodButton
            active={!this.state.isOnceButtonSelected}
            onClick={() => this.setState({ isOnceButtonSelected: false })}
          >
            MONTHLY
          </PeriodButton>
        </PeriodButtonsContainer>
        <PickerContainer>
          <DonationLabel>{labelText}</DonationLabel>
          {this.state.isOnceButtonSelected && (
            <DonationBox>
              <InputContainer>
                <InputGroup
                  style={{
                    'font-size': '2rem',
                  }}
                >
                  <InputGroup.Addon
                    style={{
                      'font-size': '2rem',
                    }}
                  >
                    &pound;
                  </InputGroup.Addon>
                  <FormControl
                    type="number"
                    value={amount}
                    onChange={this.updateAmount}
                    style={{
                      height: '60px',
                      'font-size': '2rem',
                    }}
                  />
                </InputGroup>
              </InputContainer>
              <DonateButton
                onClick={this.checkout}
                bsStyle={{
                  height: '200px',
                  'font-weight': '900',
                }}
              >
                DONATE
              </DonateButton>
            </DonationBox>
          )}
          {!this.state.isOnceButtonSelected && (
            <DonationBox>
              <MonthlyMessageContainer>
                Monthly donations will be available soon! <br />
                <br /> You can do a one-off donation in the meantime by clicking
                GIVE ONCE.
              </MonthlyMessageContainer>
            </DonationBox>
          )}
        </PickerContainer>
      </Container>
    );
  }
}

DonationPicker.propTypes = {
  onTokenCapture: PropTypes.func.isRequired,
};
export default DonationPicker;
