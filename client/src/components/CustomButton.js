import React, { Component } from 'react';

class CustomButton extends Component {

  state = {
    backgroundColor: this.props.color
  }

  mouseEnter() {
    this.setState({backgroundColor: this.props.hoverColor});
  }

  mouseLeave() {
    this.setState({backgroundColor: this.props.color});
  }

  handlerClick(site){
    const url = site;
    window.open(url, '_self');
  }


  render() {
    const { title, quantity, site } = this.props;

    return (
      <div style={{backgroundColor: this.state.backgroundColor}}
        className="card-button"
        onClick={() => this.handlerClick(site)}
        onMouseEnter={() => this.mouseEnter()}
        onMouseLeave={() => this.mouseLeave()}>
        {title} : {quantity}
      </div>
    )
  };
};

export default CustomButton;
