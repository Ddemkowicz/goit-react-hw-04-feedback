import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Notification extends Component {
  static defaultProps = {
    message: '',
  };

  render() {
    return <div>{this.props.message}</div>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
