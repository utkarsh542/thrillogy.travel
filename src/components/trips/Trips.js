import React from "react";
import "./trips.css";

const Trips = () => {
 const trips = [
    { id: 1, image: "./assets/wild.jfif", place: "Wild Exploration" },
    { id: 2, image: "./assets/trekking.jfif", place: "Trekking Himalaya" },
    { id: 3, image: "./assets/jungle.jfif", place: "Jungle Camping" },
    { id: 3, image: "./assets/rafting.jfif", place: "River Rafting" },
    { id: 3, image: "./assets/ishland.jfif", place: "Indies Island" },
  ];
  return <div className="trips">
    <div className="tripsDiscription">
        <h2>Trips</h2>
        <hr className="tripsHrTag" />
    </div>
    <div className="wildCard" >
{trips.map((trip)=>{
    return( 
        <div className="wildcardDes" key={trip.id}>
        <div className="wildImage" >
            <img src={trip.image} alt=""/>
            <div className="wilddescription">
                <p>{trip.place}</p>
            </div>
        </div>
        </div>
)
})}
</div>


  </div>;
};

export default Trips;
