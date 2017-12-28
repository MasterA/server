// everytime we want to communicate something to
// the backend we do it via 'action cretors'

import axios from 'axios';
import { FETCH_USER } from './types';

// action creator 1 inital
export const fetchUser = () => async dispath => {
    const res = await axios.get('/api/current_user')
    dispath({ type: FETCH_USER, payload: res.data });
};

// action creator 2
// post request to the send to the backend,
// the token we got from Stripe
// after a customer makes a payment.
export const handleToken = (token) => async dispath => {
  const res = await axios.post('/api/stripe', token);
  dispath({ type: FETCH_USER, payload: res.data });
}
