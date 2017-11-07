const client = require('../tools/ssm');

// config
const STRIPE_PRIVATE = ssm.getParameter(process.env.STRIPE_PRIVATE);

// deps
const stripe = require('stripe')(STRIPE_PRIVATE);

module.exports = (event, context, callback)  => {
  if (event.method === 'POST') {  
    const { token, amount } = event.body;
    stripe.charges
    .create({
      amount: amount * 100,
      currency: 'gbp',
      description: 'CYF Donation',
      source: token
    })
    .then(() => callback(null, '200'))
    .catch(err => {
      console.log(err);
      callback(500, err)
    })
  }
};
