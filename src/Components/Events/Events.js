import Moment from 'moment';
import EventDate from './EventDate';
import EventTime from './EventTime';

const Events = ( props ) => {
    const {events} = props;
    Moment.locale('en');
    if(events.length > 0)
    {
        return(
            events.map((events, index) => {
                return(
                    <div key={index} className="event-card">
                    <div key={index} className="col-lg-12 col-md-12">
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
    else if(events.length === 0){
        return(<h3> No Events Found! </h3>)
    }

}
export default Events;