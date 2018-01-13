import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import Payments from './Payments';
import { Navbar, NavItem } from 'react-materialize';

class Header extends Component {
    renderContent() {
      switch (this.props.auth) {
        case null:
          return;
        case false:
          return (<NavItem key="1" href="/auth/google">Login With Google</NavItem>);
        default:
          return [
            //<NavItem key="1"><Payments /></NavItem>,
            <NavItem key="1" href={this.props.auth ? '/surveys' : '/'}>Dashboard</NavItem>,
            //<NavItem key="3">Credits: {this.props.auth.credits}</NavItem>,
            <NavItem key="3" href="/matches">Matches</NavItem>,
            <NavItem key="2" href="/api/logout">Logout</NavItem>
          ];
      }
    }

    render() {
      return (
        <Navbar style={{ backgroundColor: '#292d37' }} brand='Bass & Austin' href={this.props.auth ? '/surveys' : '/'} right>
        	{this.renderContent()}
        </Navbar>
      );
    }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
