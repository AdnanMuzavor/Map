
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {AllCocktailsReducer, OnlyCocktailsReducer} from "./reducers/Cocktailsreducer";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {

};

const reducer = combineReducers({
  cocktails: AllCocktailsReducer,
  onlycocktail:OnlyCocktailsReducer,
 
});
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
