// SkillFormReview shows users thier form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SkillFormReview = ({ onCancel, formValues, submitSkills, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label style={{fontSize: '1em'}}>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });


  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
      Back
      </button>
      <button
        onClick={() => submitSkills(formValues, history)}
        className="green btn-flat right white-text"
      >
        Save
        <i className="material-icons right white-text">done</i>
      </button>
    </div>
  );
};

function mapStateToProps(states) {
  return { formValues: states.form.skillForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SkillFormReview));
