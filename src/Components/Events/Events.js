import React from "react";
import Moment from 'moment';
import PropTypes from 'prop-types';
import EventDate from './EventDate';
import EventTime from './EventTime';

const Events = ( props ) => {
    const {events} = props;
    Moment.locale('en');
    if(events.length > 0)
    {
        return(
            events.map((events, index) => {
                console.log(events);
                return(
                    <div className="event-card">
                    <div className="col-lg-12">
                    <EventDate date={events.datetime} />
                    <EventTime time={events.datetime} />
                    <h4> {events.venue.name}</h4>
                    <p> {events.venue.city}, {events.venue.country}</p>
                    <a className="btn btn-primary" href={events.url} role="button"> Book Ticket </a>
               </div>
               </div>
                )
            })
        )
    }
    else{
        return(<h3> No Events Yet! </h3>)
    }
   
}
Events.propTypes = {
    date: PropTypes.string.isRequired,
    fromFormat: PropTypes.string,
    toFormat: PropTypes.string,
  };
export default Events;