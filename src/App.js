import fingers from './spinner.gif';
import { getCars, getTVShows } from './services/fetch-utils';
import { useState, useEffect } from 'react';
import './App.css';
import CarsList from './CarsList';
import TVShowList from './TVShowList';
// import your arrays here

function App() {
  const [cars, setCars] = useState([]);
  const [isCarLoading, setCarLoading] = useState(false);
  const [shows, setShows] = useState([]);
  const [isShowLoading, setShowLoading] = useState(false);

  async function fetchAndStoreCars() {
    setCarLoading(true);
    const data = await getCars();
   
    setCarLoading(false);
    setCars(data);
  }

  async function fetchAndStoreTVShows() {
    setShowLoading(true);
    const data = await getTVShows();
    console.log(data);
    setShowLoading(false);
    setShows(data);
  }
  //useEffect is a hook that gets called like all time.
  //it gets called on every change
  // If the array is empty, our useEffect is called exactly once, on load
  // THIS REPLACES OUR window.addEventListener('load', () => {})
  // if i put something in the array, the useEffect callback will be called whenever "that thing" changes.
  useEffect(() => {
    fetchAndStoreCars();
    fetchAndStoreTVShows();
  }, []);

  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <h3>Cars</h3>
      {
        //if isLoading is true in state, show the spinner
        isCarLoading
          ? <img src={fingers} />
          //if not loading, that means we have data -> show data
          : <div className="car-list">
            <CarsList cars={cars} />
          </div>
      }

      <h3>Favorite Netflix Shows</h3>
      {
        isShowLoading
          ? <img src={fingers} />
          : <div className="show-list">
            <TVShowList shows={shows} />
          </div>
      }
    </div>
  );
}

export default App;
