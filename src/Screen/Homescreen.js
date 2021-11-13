import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllcocktails } from "../actions/GetCocktails";
import { Link } from "react-router-dom";
import LoadingComp from "./Loading";
import CockTailCard from "../components/CocktailCard";
import Header from "../components/Header";
const HomeScreen = () => {
  const cocktails = useSelector((state) => state.cocktails);
  const { loading, Allcocktails, error } = cocktails;
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");
  const [searchdata, setsearchdata] = useState([]);

  const searchhandler = () => {
    const Require = Allcocktails.filter((e) => {
      return Object.values(e.strDrink)
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    setsearchdata(Require);
    console.log(Require);
  };
  useEffect(() => {
    dispatch(getAllcocktails());
  }, []);
  return loading ? (
    <LoadingComp />
  ) : (
    <>
      <Header />
      <div className="row d-flex flex-direction-row justify-content-center">
        <div className="col-12 col-md-6 col-lg-6 ">
          <div className="row d-flex flex-direction-row justify-content-center">
            <input
              type="text"
              placeholder="Enter the cocktail name"
              className="col-9 col-lg-8 col-md-8 searchitem mt-3"
              name="search"
              value={search}
              autoComplete="off"
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
            <button
              className="text-center srchbtn  mx-auto mb-2 imgbtn col-5 col-lg-3 col-md-3 mt-3"
              onClick={searchhandler}
            >
              <i class="fa fa-search icon" aria-hidden="true"></i>
              search
            </button>
          </div>
        </div>
      </div>

      <div className="row blogcontainer mx-auto mt-5">
        {search !== "" ? (
          searchdata.length >= 1 ? (
            <div className=" topic text-center">
              <p>Search result</p>
            </div>
          ) : (
            <div className=" topic text-center">
              <p>No cocktails with given name</p>
            </div>
          )
        ) : (
          <div className=" topic text-center">
            <p>All cocktails</p>
          </div>
        )}
        {/* when nothing search, all cocktails will be displayed else search result */}
        {search === ""
          ? Allcocktails.map((e) => {
              return (
                <Link
                  to={`/getacocktail/${e.idDrink}`}
                  className="col-10 col-md-3 col-lg-3 blogcard"
                >
                  <img src={e.strDrinkThumb} className="img-fluid"></img>
                  <div>
                    <h4 className="text-center">{e.strDrink}</h4>
                  </div>
                </Link>
              );
            })
          : searchdata.length >= 1
          ? searchdata.map((e) => {
              return (
                <CockTailCard
                  key={e.idDrink}
                  img={e.strDrinkThumb}
                  name={e.strDrink}
                />
              );
            })
          : null}
      </div>
    </>
  );
};

export default HomeScreen;
