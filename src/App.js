import "./App.css";
import icon1 from "./Icons/icon1.png"
import "bootstrap/dist/css/bootstrap.css";

import React, { Component, useEffect, useState } from "react";
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
  const [selected, setselected] = useState(Places[0]);
  const [id,setid]=useState(null);
  useEffect(() => {
    setselected(Places[0]);
  }, []);
  const PlaceClicked = (p) => {
    console.log(p);
    setid(p.id);
    //setselected(null)
    setselected(p);
   
  };
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
                  <LocationCard
                    key={Math.random() * Math.random()}
                    place={e}
                    Fn={PlaceClicked}
                  />
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
                    return (
                      <Marker
                        position={{ lat: e.lat, lng: e.lang }}
                        onClick={() =>{ setselected(e)
                        setid(null)}}
                        
                        icon={{url:id===e.id?icon1:null,
                        
                        }}
                      //   icon={{

                      //     url: 'https://cdn.mindbowser.com/custom_marker_pin.svg',
                  
                      //     // anchor: new google.maps.Point(17, 46),
                  
                      //      //scaledSize:new props.google.maps.Size(37, 37)
                  
                      // }}
                      />
                    );
                  })}
                  {/* {
                    selected?<InfoWindow
                    position={{lat:selected.lat,lng:selected.lang}}
                    >
                    <div>
                      <h2>{selected.name}</h2>
                    </div>
                    </InfoWindow>:null
                  } */}
                  {selected ? (
                    <InfoWindow
                      //  marker={activeMarker}
                      //  visible={showInfoWindow}
                      position={{ lat: selected.lat, lng: selected.lang }}
                      visible={selected ? true : false}
                    >
                      <div className={selected.id===id?"container2":"container"}>
                        <p className="text-center"><strong>{selected.id===id?"Here is place you selected":null}</strong></p>
                        <p className="text-center">{selected.name}</p>
                        <div className="text-center">{selected.location}</div>
                      </div>
                    </InfoWindow>
                  ) : null}
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
