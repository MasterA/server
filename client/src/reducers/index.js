import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

// key: reducer
// key is what referenced by in our Redux store
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
