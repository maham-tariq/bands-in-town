import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios"
import Header from '../Header/Header';
import Artist from '../Artist/Artist';
import Events from '../Events/Events';
import Search from '../Search/Search';
import LoadingBar from 'react-top-loading-bar';



const App =() => {
  const [loading, setLoading] = useState(null);
  const [artist, setArtist] = useState([]);
  const [events, setEvents] = useState([]);
  const [responseCheck, setResponseCheck] = useState(true); 
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    search();
  }, []);
  
  const search = searchValue =>{
    setLoading(false);

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
      console.log("Fail");
        setLoading(false);
    });

    
    axios.get(`https://rest.bandsintown.com/artists/${searchValue}/events/?app_id=f7bbe9873702344ffc21cc961eeb7475`)
    .then((response) => {
        // const allEvents = response.data.events.allEvents;
        setEvents(response.data);
        setLoading(true);
        setProgress(100);

    })
    .catch((error) => {
      console.log("Fail");
        setLoading(false);
    });
  };
 
  return(
    
    <div className="App">
      <Header text="BIT APP" />
      <Search search={search} text="Search your favourite artists!" />
       {/* <pre>
        <code>
          {artist && JSON.stringify(artist, null, 4)}
        </code>
      </pre> */}
        { loading && 
          <LoadingBar height="3px"  color="#f5e100" progress={progress} onLoaderFinished={() => setProgress(0)} />
        }
        { responseCheck && <Artist artist = {artist} /> }
        
       <div className="container events-section">
           <div className="row">
             { responseCheck && <Events events = {events} /> }
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
