import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getonlycocktail } from "../actions/GetCocktails";
import LoadingComp from "./Loading";

const GetOnlyCocktail = (props) => {
  const onlycocktail = useSelector((state) => state.onlycocktail);
  const { loading2, Onlycocktail, error } = onlycocktail;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(props.match.params.id);
    dispatch(getonlycocktail(props.match.params.id));
  }, []);
  return loading2 ? (
    <LoadingComp />
  ) : (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-5 col-lg-5 col-10 blogcontainer2">
            <div className="text-center">
              <h5>{Onlycocktail.strDrink}</h5>
            </div>
            <img src={Onlycocktail.strDrinkThumb} className="img-fluid"></img>
          </div>
          <div className="col-md-5 col-lg-5 col-10 blogcontainer2 content ">
            <div className="text-center mb">
              <h4>Instructions</h4>
            </div>

            <div className="text-center mb">
              <h6>{Onlycocktail.strInstructions}</h6>
            </div>
            <div className="text-center mb">
              <h5>Category: {Onlycocktail.strCategory}</h5>
            </div>
            <div className="text-center mb">
              <h3>Serve: {Onlycocktail.strGlass}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetOnlyCocktail;
