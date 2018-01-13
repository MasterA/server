import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import CustomButton from './CustomButton';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div style={{marginTop: '10px'}}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              {this.props.tabOneName}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              {this.props.tabTwoName}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <Row style={{ margin: '0px', paddingTop: '20px'}}>
              <Col sm="12" xs="12" style={{paddingBottom: '25px'}}>
                <CustomButton
                  site="/matches"
                  title="Matches"
                  quantity="5"
                  color="#ff7373"
                  hoverColor="#ffc7c7"
                />
              </Col>
            </Row>
            <Row style={{ margin: '0px'}}>
              <Col sm="6" xs="12" style={{paddingBottom: '25px'}}>
                <CustomButton
                  site="/skills"
                  title="Skills"
                  quantity="5"
                  color="#5558dc"
                  hoverColor="#333484"
                 />
              </Col>
              <Col sm="6" xs="12" style={{paddingBottom: '25px'}}>
                <CustomButton
                  site="/experience"
                  title="Experience"
                  quantity="10"
                  color="#468499"
                  hoverColor="#2e5765"
                />
              </Col>
            </Row>
            <Row style={{ margin: '0px'}}>
              <Col sm="6" xs="12" style={{paddingBottom: '25px'}}>
                <CustomButton
                  site="/education"
                  title="Education"
                  quantity="1"
                  color="#55dc96"
                  hoverColor="#4cc687"
                />
              </Col>
              <Col sm="6" xs="12" style={{paddingBottom: '25px'}}>
                <CustomButton
                  site="/Miscellaneous"
                  title="Misc."
                  quantity="12"
                  color="#dc559b"
                  hoverColor="#c64c8b"
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>LinkedIn Profile</CardTitle>
                  <CardText></CardText>
                  <Button>Connect</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Upload Resume</CardTitle>
                  <CardText></CardText>
                  <Button>Upload</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Tabs;
