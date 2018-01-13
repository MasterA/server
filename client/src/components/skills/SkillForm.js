// SkillForm shows a form for a user to add input
import React, { Component } from 'react';
// tells class that it will be in control of any forms in the application
// Field helps in displaying text etc... among other things!
import { reduxForm, Field } from 'redux-form';
import TextField from '../forms/TextField';
import DatePickerField from '../forms/DatePickerField';

class SkillForm extends Component {

  // custom helper function
  // Note: Sec 11 Lec 150 Fields from Config
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSkillSubmit)}>
          <div>
            <Field
              key="title"
              component={TextField}
              label="Skill"
              name="title"
            />
          </div>
          <div>
            <Field
              key="length"
              component={DatePickerField}
              label="Since when you aquiured this skill"
              name="length"
            />
          </div>
          <button type="submit" style={{ width: '100%'}} className="teal btn-flat right white-text">
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

  if(!values.title) {
    errors.title = 'You must provide a value';
  }

  if(!values.length) {
    errors.length = 'You must provide a date';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'skillForm',
  destroyOnUnmount: false
})(SkillForm);
