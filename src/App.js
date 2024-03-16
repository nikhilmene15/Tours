import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading, setLoading] = useState(true);

const [tours, setTours] = useState([]);

const fetchData = async()=>{

  setLoading(true);

  try {
    const response = await fetch(url);
    const tours = await response.json();
    // console.log(tour);
    setTours(tours);
    setLoading(false);
    
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

useEffect(()=>{
  fetchData();
},[])

const removeTour = (id)=>{
  const newTour = tours.filter((tour)=>tour.id !== id);
  setTours(newTour);
}

  if(loading){
    return(
      <main>
        <Loading  />
      </main>
    )
  }
  if (tours.length === 0) {
    return(
      <main>
        <div className='title'>
        <h2>no more tour left</h2>
        <button className='btn' onClick={()=>fetchData()}>refresh</button>
        </div>
      </main>
    )
    
  }
  return (
    <main>
       <Tours tours={tours} removeTour={removeTour} />
    </main>
   
  )
}

export default App
