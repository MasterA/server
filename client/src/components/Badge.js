import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import { Button } from 'react-materialize';

class BadgeBadge extends Component {

  handlerClick(){
    const url = '/matches';
    window.open(url, '_self');
  }

  render() {
    return (
      <Badge
        badgeContent={4}
        secondary={true}
        badgeStyle={{top: 12, right: 12}}
        onClick={this.handlerClick}
      >
        <Button style={{zIndex: -1}}>
          {this.props.title}
        </Button>
      </Badge>
    )
  };
};

export default BadgeBadge;
