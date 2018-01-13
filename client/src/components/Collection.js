import React, { Component } from 'react';
import { Collection } from 'react-materialize';
import { Row, Col } from 'reactstrap';
import Modal from './Modal';
import SkillList from './skills/SkillList';
import SkillNew from './skills/SkillNew';

class collection extends Component {
//<Modal title="Add Skills" classNew={<SkillNew />} />

  handleOpen() {
    const url = '/skills/new';
    window.open(url, '_self');
  }

  render() {
    return (
      <Row>
        <Col xs="12" sm="12" style={{paddingTop: '20px'}}>
          <Collection style={{ margin: '10%' }}>
            {/* <div
              style={{padding: '20px 20px 0 0'}}
              onClick={this.handleOpen}>
                <Icon small right>note_add</Icon>
            </div> */}
            <Modal title="Add Skills" classNew={<SkillNew />} />
            <h4 style={{paddingLeft: '20px'}}> Skills
            </h4>
            <SkillList />
          </Collection>
        </Col>
      </Row>
    )
  };
};

export default collection;
