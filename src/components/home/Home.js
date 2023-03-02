import React ,{useState}from 'react'
import "./home.css"

const Home = () => {
  const [location, setLocation] = useState("");
  const [pack, setPack] = useState("");
  const [trip, setTrip] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePackageChange = (event) => {
    setPack(event.target.value);
  };
  const handleTripChange = (event) => {
    setTrip(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
  };
  return (
    <div className='home'>
      <div className="homeDetails">
        <div className="hometitle">
      <h2 className='hometitleDes'>Search your location Trip and Package</h2>
      </div>
     <form onSubmit={handleSubmit} className= "homeForm">
      <label htmlFor='location' className='formLabel'>
        
        <input type="text" value={location} onChange={handleLocationChange} id='location' placeholder='Location' className='forminputLocation'/>
      </label>
      <label htmlFor='package' className='formLabel'>
      
        <input type="text" value={pack} onChange={handlePackageChange} id='package' placeholder='Package'  className='forminput'/>
      </label>
      <label htmlFor='trip'className='formLabel'>
      
        <input type="text" value={trip} onChange={handleTripChange} id= 'trip' placeholder='Trip' className='forminputTrip'/>
      </label>
      <button type="submit" className='homeFromSubmit'>Search</button>
    </form>
    </div>
    </div>
  )
}

export default Home
