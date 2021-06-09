import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class EventDate extends Component {
  render() {
    const { date, fromFormat, toFormat } = this.props;

    return (
      <h3>{moment(date, fromFormat).format(toFormat)}</h3>
    );
  }
}

EventDate.propTypes = {
  date: PropTypes.string.isRequired,
  fromFormat: PropTypes.string,
  toFormat: PropTypes.string,
};

EventDate.defaultProps = {
  fromFormat: 'YYYY-MM-DDThh:mm:ss',
  toFormat: 'dddd, MMMM Do YYYY',
};

export default EventDate;
