import "./App.css";
import React from "react";

import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";



import HomeScreen from "./Screen/Homescreen";
import GetOnlyCocktail from "./Screen/OnlyCocktailScreen";

function App() {
  

  const Routing = () => {
    return (
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>

        <Route
          path="/getacocktail/:id"
          render={(props) => <GetOnlyCocktail {...props} />}
        />
      </Switch>
    );
  };

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
