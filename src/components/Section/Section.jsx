import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Section extends Component {
  static defaultProps = {
    title: '',
  };

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
