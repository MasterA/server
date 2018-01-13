import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { Icon } from 'react-materialize';

const customContentStyle = {
  width: '100%',
  maxWidth: '500px'
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
class DialogCustomWidth extends Component {


  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  render() {
    const actions = [
      <button
        style={{ width: '93%', marginTop: '-25px', marginRight: '14.5px', backgroundColor: '#E91E63'}}
        className="btn-flat white-text"
        onClick={this.handleClose}
      >Cancel</button>
    ];

    return (
      <div>
        <div
          style={{padding: '20px 20px 0 0'}}
          onClick={this.handleOpen}>
            <Icon small right>note_add</Icon>
        </div>
        <Dialog
          title={this.props.title}
          modal={true}
          actions={actions}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          {this.props.classNew}
        </Dialog>
      </div>
    );
  }
}

export default DialogCustomWidth;
