import React from "react";

const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'decimal',
  }).format(value);
  
const imagePlaceholder = require('./person-placeholder.jpg');

const Artist = ({ artist }) => {
    const artistThumbnail = artist.image_url === undefined ? imagePlaceholder : artist.image_url;
    var styles = {backgroundImage: `url(${artistThumbnail})`}

    if(artist.length > 0)
    {
    return(
        <div style={styles} className="artist-bg"><div className="overlay"></div>
            <div className="container">
                <div className="row">
                <div className="col-lg-4 artist-profile-img">
                    <figure> <img src={artistThumbnail} width="200" alt="img"/></figure>
                </div>
                <div className="col-lg-5 artist-profile pl-4 mt-5">
                    <h2> {artist.name} </h2>
                    <span> {numberFormat(artist.tracker_count)} Followers </span>
                    <span> - {artist.upcoming_event_count} Upcoming Events</span>
                </div>
                <div className="col-lg-2 artist-links">
                    <a className="btn btn-primary" href={artist.url} role="button"> Bands In Town </a>
                     <a className="btn btn-primary" href={artist.url} role="button"> Facebook Link </a>
                </div>
                </div>
            </div>
        </div>
        )
    }
    else{
        return(<h3> No artist by this name! </h3>)
    }
}

export default Artist;