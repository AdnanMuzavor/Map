import "./App.css";
import React from "react";

import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


import { useReducer } from "react";



import { useState } from "react";

import HomeScreen from "./Screen/Homescreen";
import GetOnlyCocktail from "./Screen/OnlyCocktailScreen";


function App() {
  const [posts, setposts] = useState([]);

 

  const Routing = () => {
    return (
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>

        {/* <Route path="/login?" render={(props)=> <Login {...props} />}/> */}

        {/* <Route path="/blogs" render={() => <Allblogs posts={posts} />} /> */}

        <Route
          path="/getacocktail/:id"
          render={(props) => <GetOnlyCocktail {...props}  />}
        />

        <Route>
          {/* <Error /> */}
        </Route>
      </Switch>
    );
  };

  return (
    <>
     
        {/* <Navimg/> */}
        {/* <Navbar/> */}

        <Routing />
        {/* <Footer/> */}
     
    </>
  );
}

export default App;
