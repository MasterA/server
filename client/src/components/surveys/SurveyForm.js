// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
// tells class that it will be in control of any forms in the application
// Field helps in displaying text etc... among other things!
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './ServiceField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

  // custom helper function
  // Note: Sec 11 Lec 150 Fields from Config
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">play_arrow</i>
          </button>
        </form>
      </div>
    );
  }
}

// values = an object with all the values of the form,
// form fields are specified by 'formFields.js'
function validate(values) {
  const errors = {};

  // 1. 3.
  errors.recipients = validateEmails(values.recipients || '');

  // 2.
  _.each(formFields, ({ name }) => {
    // on the fly a.k.a. in run time,
    // what value in the values array we want to look at.
    if(!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
