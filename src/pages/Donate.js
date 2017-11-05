import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TopSection from '../components/top-section';
import DonationPicker from '../components/donation-picker';
import * as axios from 'axios';

export class Donate extends React.Component {
    state = {
      tokenSuccess: null,
      tokenError: null,
    };

    onTokenSuccess = async (token, amount) => {
      try {
        await axios.post(process.env.REACT_APP_DONATION_ENDPOINT, {
          token,
          amount,
        }, {
          headers: {
            'Access-Control-Allow-Origin' : '*',
          }
        });
        this.setState({tokenSuccess: true});
      } catch (e) {
        this.setState({tokenError: true});
      }
    }

    render() {
      const { tokenSuccess, tokenError } = this.state;
      const donateText = (
        <div>
          <p>
            We are a non-profit organisation supporting refugees with the dream of becoming developers.
          </p>
          <p>
            We rely soely on donations, in both time and money to keep this dream alive!
          </p>
          <p>
            By donating below, you can help us continue to run classes, set up job opportunties and XXXX.
            We accept bitcoin.
          </p>

          <div>

            <Row>
                <Col xs={12} md={12}>
                    {tokenSuccess && <div>Thank you for your donation!</div>}
                    {tokenError && <div>Sorry, there was a problem processing your donation. Please try again!</div>}
                    {!tokenSuccess && !tokenError && <DonationPicker onTokenCapture={this.onTokenSuccess} />}
                </Col>
            </Row>

            </div>


        </div>
      );

      return (
        <div>
          <TopSection title="Donate" content={donateText} />
          <div className="mentors-hero-wrap" />
        </div>
      );
    }
}
