// everytime we want to communicate something to
// the backend we do it via 'action cretors'

import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS, FETCH_SKILLS } from './types';

// action creator 1 inital (Google OAuth)
export const fetchUser = () => async dispath => {
    const res = await axios.get('/api/current_user');
    // dispach an action called FETCH_USER to update our user model
    dispath({ type: FETCH_USER, payload: res.data });
};

// action creator 2 (Stripe)
// post request to the send to the backend,
// the token we got from Stripe
// after a customer makes a payment.
export const handleToken = (token) => async dispath => {
  const res = await axios.post('/api/stripe', token);
  dispath({ type: FETCH_USER, payload: res.data });
}

// action creator 3 (Surveys)
// values = all the values of the form
export const submitSurvey = (values, history) => async dispath => {
  // make request
  const res = await axios.post('/api/surveys', values);
  // "after request is made" override current route with the following route:
  history.push('/surveys');
  // dispach an action called FETCH_USER to update our user model
  dispath({ type: FETCH_USER, payload: res.data });
};

// action creator 4 (Surveys)
// to get surveys to display in dashboard
export const fetchSurveys = () => async dispath => {
  const res = await axios.get('/api/surveys');
  dispath({ type: FETCH_SURVEYS, payload: res.data });
}

// action creator 5 (Skills)
// values = all the values of the form
export const submitSkills = (values, history) => async dispath => {
  // make request
  const res = await axios.post('/api/skills', values);
  // "after request is made" override current route with the following route:
  //history.push('/skills');
  history.push('/');
  history.push('/skills');
  // dispach an action called FETCH_USER to update our skills model
  dispath({ type: FETCH_USER, payload: res.data });
};

// action creator 5 (Skills)
export const fetchSkills = () => async dispath => {
  const res = await axios.get('/api/skills');
  dispath({ type: FETCH_SKILLS, payload: res.data });
};
