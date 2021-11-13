import React from "react";
import { Link } from "react-router-dom";
const CockTailCard = ({ key, img, name }) => {
  return (
    <>
      <Link
        to={`/getacocktail/${key}`}
        className="col-10 col-md-3 col-lg-3 blogcard"
      >
        <img src={img} className="img-fluid"></img>
        <div>
          <h4 className="text-center">{name}</h4>
        </div>
      </Link>
    </>
  );
};

export default CockTailCard;
