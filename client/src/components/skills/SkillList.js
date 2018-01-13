import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSkills } from '../../actions';
import { CollectionItem, Badge } from 'react-materialize';
import FindLengthOfTime from '../../toolset/FindLengthOfTime'

class SkillList extends Component {

  componentDidMount() {
    this.props.fetchSkills();
  }

  // custom function
  renderSkills() {
    return this.props.skills.reverse().map(skill => {
      return (
        <CollectionItem href="#!" key={skill._id}>
          {skill.title}<Badge><FindLengthOfTime date={skill.length} /></Badge>
        </CollectionItem>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderSkills()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { skills: state.skills }
}

export default connect(mapStateToProps, { fetchSkills })(SkillList);
