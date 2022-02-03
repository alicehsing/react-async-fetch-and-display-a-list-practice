import fingers from './spinner.gif';
import { getCars } from './services/fetch-utils';
import { useState, useEffect } from 'react';
import './App.css';
import CarsList from './CarsList';
// import your arrays here

function App() {
  const [cars, setCars] = useState([]);
  const [isCarLoading, setCarLoading] = useState(false);

  async function fetchAndStoreCars() {
    setCarLoading(true);
    const data = await getCars();
    console.log(data);
    setCarLoading(false);
    setCars(data);
  }
  //useEffect is a hook that gets called like all time.
  //it gets called on every change
  // If the array is empty, our useEffect is called exactly once, on load
  // THIS REPLACES OUR window.addEventListener('load', () => {})
  // if i put something in the array, the useEffect callback will be called whenever "that thing" changes.
  useEffect(() => {
    fetchAndStoreCars();
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
            <CarsList cars={cars}/>
          </div>
      }
    </div>
  );
}

export default App;
