import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import React, { Component, useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import Places from "./Places/Places";
import LocationCard from "./components/CardComp";

const mapStyles = {
  width:
    window.innerWidth >= 1500
      ? "42%"
      : window.innerWidth >= 360 && window.innerWidth <= 560
      ? "80%"
      : "40%",
  height:
    window.innerWidth >= 1500
      ? "60%"
      : window.innerWidth >= 360 && window.innerWidth <= 560
      ? "80%"
      : "40%",
};

const MapContainer = (props) => {
  return (
    <>
      <div className="container ">
        <div className="row rows">
          <div className="col-12 col-lg-6 col-md-6 cols">
            <h4 className="text-center pd-3">
              Your personalised serach results
            </h4>
            <div className="row flx1">
              {Places.map((e) => {
                return (
                  <LocationCard key={Math.random() * Math.random()} place={e} />
                );
              })}
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 cols2">
            <h4 className="text-center pd-3 mb">How to reach?</h4>
            <h6 className="text-center pd-3 lb">
              check the map below to explore the location
            </h6>
            <div className="row flx1 ">
              <div className="col-12 col-md-12 col-lg-12 mapp">
                <Map
                  google={props.google}
                  zoom={16.8}
                  style={mapStyles}
                  initialCenter={{
                    lat: 15.499112299976893,
                    lng: 73.82634682355196,
                  }}
                >
                  {Places.map((e) => {
                    return <Marker position={{ lat: e.lat, lng: e.lang }} />;
                  })}
                </Map>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyCZv9eQbboBjzcM28usPv-fVHsIarRxX5Q",
})(MapContainer);

// function App(){
// return(
//   <>
//   <MapContainer/>
//   </>
// )
// }
// export default App;
