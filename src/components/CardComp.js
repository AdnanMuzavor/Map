import React from "react";

const LocationCard = ({place,Fn}) => {
  return (
    <>
      <div className="col-10 col-lg-10 col-md-10 card" onClick={()=>Fn(place)}>
        <div className="row">
          <div className="col-6">
            <img
              src={place.img}
              className="img-fluid"
            ></img>
          </div>
          <div className="col-6">
            <h5>{place.name}</h5>
            <h6 className="lb"><i className='fas fa-map-marker-alt me-2'></i>{place.location}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationCard;
