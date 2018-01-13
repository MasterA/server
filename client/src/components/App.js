import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Collection from './Collection';
import SkillNew from './skills/SkillNew';
import SurveyNew from './surveys/SurveyNew';
import Matches from './Matches';
import Footer from "./Footer";
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
          <MuiThemeProvider>
            <BrowserRouter>
              <div className="">
                <Route exact path="/" component={Landing} />
                <Container style={{width: "100%"}}>
                  <Row>
                    <Col sm="12">
                      <Route exact path="/surveys" component={Dashboard} />
                      <Route exact path="/skills" component={Collection} />
                      <Route exact path="/skills/new" component={SkillNew} />
                      <Route path="/surveys/new" component={SurveyNew} />
                      <Route exact path="/matches" component={Matches} />
                    </Col>
                  </Row>
                </Container>
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);
