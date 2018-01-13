import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import skillsReducer from './skillsReducer';
import modalReducer from './modalReducer';

// key: reducer
// key is what referenced by in our Redux store
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
  skills: skillsReducer,
  modal: modalReducer
});
