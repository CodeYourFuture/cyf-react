// Charge a transaction identified by `token` for the amount `amount`.

import stripeLoader from 'stripe';
import { getSSMParameter } from '../tools';

export default (event, context, callback) => {
  // if (event.method === 'POST') {
    // const { token, amount } = event.body;

    getSSMParameter(process.env.STRIPE_PRIVATE_KEY_ALIAS)
      .then(stripePrivateKey => {
         return stripeLoader(stripePrivateKey)
      })
      .then(stripe =>
        stripe.tokens.retrieve(
          "tok_1BwwPfHb1AyMHS56gA0lohBF",
          (err, token)  =>{
            stripe.sources.create({
              type: 'card',
              token: "tok_1BwwhcHb1AyMHS56q6NDSc6x",
            }, (err, source) => {
              console.log({err, source})
              stripe.customers.create({
                email: "paying.user@example.com",
                source: source.id,
              }, (err, customer) => console.log({err, customer}))
            });
          }
        )
  //       stripe.charges
  //         .create({
  //           amount: amount * 100,
  //           currency: 'gbp',
  //           description: 'CYF Donation',
  //           source: token,
  //         })
  //         .then(() => callback(null, '[200] Payment succesful.'))
  //         .catch(error => {
  //           // eslint-disable-next-line no-console
  //           console.error(error);
  //           return callback(error, '[400] Error during payment.');
          // }),
      )
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
        return callback(error, '[400] Error during payment.');
      });
  // }
};
