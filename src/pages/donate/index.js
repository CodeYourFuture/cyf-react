import React from 'react';
import { StripeProvider } from 'react-stripe-elements';
import * as axios from 'axios';
import styled from 'react-emotion';
import DonationPicker from '../../components/donation-picker';
import mentors from '../../assets/images/mentors-group.jpg';

const Container = styled('div')`
  display: flex;
  padding: 48px 24px 0 24px;
  margin-bottom: 48px;
  width: 100%;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PickerContainer = styled('div')`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  margin: 0 0 0 0;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const TextContainer = styled('div')`
  display: flex;
  width: 50%;
  justify-content: flex-start;
  margin: 0 100px 0 100px;
  color: black;
  text-align: left;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 24px 0 0 0;
  }
`;

const ImageContainer = styled('div')`
  overflow: hidden;
  max-height: 450px;
  margin: 0 auto;
  & img {
    width: 100%;
    max-width: 1800px;
  }
`;

class Donate extends React.Component {
  state = {
    tokenSuccess: null,
    tokenError: null,
  };

  onTokenSuccess = async (token, amount) => {
    try {
      console.log({ token });
      await axios.post(
        process.env.REACT_APP_DONATION_ENDPOINT,
        {
          token,
          amount,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      this.setState({ tokenSuccess: true });
    } catch (e) {
      this.setState({ tokenError: true });
    }
  };

  render() {
    const { tokenSuccess, tokenError } = this.state;
    const donateText = (
      <div>
        <h3>We work on a 100% donation model</h3>
        <br />
        <p>
          That means that all support from individuals will go entirely to
          support our students.
        </p>
        <p>
          This will help cover for childcare, transportation, laptops and
          internet for our students most in need.
        </p>
      </div>
    );
    return (
      <div>
        {tokenError && (
          <h4>
            Sorry, there was a problem processing your donation. Please try
            again!
          </h4>
        )}
        <Container>
          {tokenSuccess && <h2>Thank you for your donation!</h2>}
          <PickerContainer>
            {!tokenSuccess && (
              <DonationPicker onTokenCapture={this.onTokenSuccess} />
            )}
          </PickerContainer>
          {!tokenSuccess && <TextContainer>{donateText}</TextContainer>}
        </Container>
        <ImageContainer>
          <img src={mentors} alt="code-your-future-mentors" />
        </ImageContainer>
      </div>
    );
  }
}

export default Donate;
