import React from 'react';
import ReactDOM from 'react-dom';

import { unregister } from './registerServiceWorker';
import Routes from './Routes';

const stripe = document.createElement('script');
stripe.setAttribute('src', 'https://checkout.stripe.com/checkout.js');
stripe.setAttribute('async', true);
document.head.appendChild(stripe);

ReactDOM.render(<Routes />, document.getElementById('root'));
unregister();
