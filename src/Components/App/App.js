import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios"
import Header from '../Header/Header';
import Artist from '../Artist/Artist';
import Events from '../Events/Events';
import Search from '../Search/Search';
import LoadingBar from 'react-top-loading-bar';



const App =() => {
  const [loading, setLoading] = useState(null); //State for Loading
  const [artist, setArtist] = useState([]); //State for Storing Artist Data
  const [events, setEvents] = useState([]); //State for Storing Events Data
  const [responseCheck, setResponseCheck] = useState(false); //Response check to show artist related info on first load
  const [progress, setProgress] = useState(0) //State for Loading Bar

  useEffect(() => {
    search(); //Getting search response for API
  }, []);

  const search = searchValue =>{  //Fetching API Data and setting state var.
    setLoading(false);

    //Fetching Artist data based on search input
    axios.get(`https://rest.bandsintown.com/artists/${searchValue}/?app_id=f7bbe9873702344ffc21cc961eeb7475`)
    .then((response) => {
        if( response.data.name !== 'Undefined')
        {
          setArtist(response.data)
          setLoading(true);
          setResponseCheck(true);
        }
        else{
          setResponseCheck(false);
        }
    })
    .catch((error) => {
        setLoading(false);
    });

    //Fetching Events data based on search input
    axios.get(`https://rest.bandsintown.com/artists/${searchValue}/events/?app_id=f7bbe9873702344ffc21cc961eeb7475`)
    .then((response) => {
        setEvents(response.data);
        setLoading(true);
        setProgress(100);

    })
    .catch((error) => {
        setLoading(false);
    });
  };
  var styles = {backgroundImage: `url(${artist.image_url})`}
  return(

    <div className="App">
      { loading &&
          <LoadingBar height="3px"  color="#f5e100" progress={progress} onLoaderFinished={() => setProgress(0)} />
        }

      <Header/>
      <div style={styles} className="artist-bg">{ artist.name !== undefined ? <div className="overlay" ></div>: <div></div>}
      <Search search={search} text="Search your favourite artists!" />
       {/* <pre>
        <code>
          {artist && JSON.stringify(artist, null, 4)}
        </code>
      </pre> */}
        { loading && responseCheck && <Artist artist = {artist} /> }
        </div>
       <div className="container events-section">
           <div className="row mr-0 ml-0">
             { loading && responseCheck && <Events events = {events} /> }
           </div>
        </div>
        {/* <pre>
        <code>
          {events && JSON.stringify(events, null, 4)}
        </code>
      </pre> */}
    </div>
  );
};

export default App;
