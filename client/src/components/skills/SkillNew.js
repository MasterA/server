// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SkillForm from './SkillForm';
import SkillFormReview from './SkillFormReview';

class SkillNew extends Component {

  /*
  SAME AS BOTTOM LINE
  constructor(props) {
      super(props);

      this.state = { new: true };
  }
  */
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <SkillFormReview onCancel={() => this.setState({ showFormReview: false })}/>;
    } else {
      return <SkillForm onSkillSubmit={() => this.setState({ showFormReview: true })} />
    }
  }

  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'skillForm'
})(SkillNew);
