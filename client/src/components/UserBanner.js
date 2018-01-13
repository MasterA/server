import React, { Component } from 'react';
import { Media } from 'reactstrap';
import ProfilePic01 from './img/profile-pic-01.jpg';
import BadgeBadge from './Badge';

class UserBanner extends Component {
  render() {
    return (
      <Media className="padding-container">
        <Media left href="#">
          <Media className="img-circle" object src={ProfilePic01} alt="Profile Pic" />
        </Media>
        <Media className="padding-container" body>
          <Media heading>
            {this.props.name}
          </Media>
          Age: {this.props.age}
          <Media style={{marginTop: '10px'}}>
            <BadgeBadge title="MATCHES" />
          </Media>
        </Media>
      </Media>
    );
  }
}

export default UserBanner;
