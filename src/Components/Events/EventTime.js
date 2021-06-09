import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class EventTime extends Component {
  render() {
    const { time, fromFormat, toFormat } = this.props;

    return (
      <h3>{moment(time, fromFormat).format(toFormat)}</h3>
    );
  }
}

EventTime.propTypes = {
  time: PropTypes.string.isRequired,
  fromFormat: PropTypes.string,
  toFormat: PropTypes.string,
};

EventTime.defaultProps = {
  fromFormat: 'YYYY-MM-DDThh:mm:ss',
  toFormat: 'h:mm a',
};

export default EventTime;
