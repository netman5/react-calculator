/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Buttons extends Component {
  render() {
    const { label, value } = this.props;
    return (
      <button type="button" className="Button" value={value}>
        {label}
      </button>
    );
  }
}

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Buttons;
