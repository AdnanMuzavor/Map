import {
  ALL_COCKTAILS_FAIL,
  ALL_COCKTAILS_REQUEST,
  ALL_COCKTAILS_SUCCESS,
  ONLY_COCKTAILS_FAIL,
  ONLY_COCKTAILS_REQUEST,
  ONLY_COCKTAILS_SUCCESS,
} from "../constants/Cocktail";

export const getAllcocktails = () => async (dispatch) => {
  dispatch({ type: ALL_COCKTAILS_REQUEST });
  try {
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
    const data = await res.json();
    console.log(`post data:${data}`);
    console.log(data);
    
    dispatch({ type: ALL_COCKTAILS_SUCCESS, payload: data.drinks});
  } catch (e) {
    dispatch({ type: ALL_COCKTAILS_FAIL, payload: e.message });
  }
};

export const getonlycocktail = (id) => async (dispatch) => {
  dispatch({ type: ONLY_COCKTAILS_REQUEST });
  try {
     const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
    const data = await res.json();
    console.log(`post data:${data}`);
    console.log(data.drinks.filter((e)=>e.idDrink===id));
    const required=data.drinks.filter((e)=>e.idDrink===id)[0];
    dispatch({ type: ONLY_COCKTAILS_SUCCESS, payload: required });
    
  } catch (e) {
    dispatch({ type: ONLY_COCKTAILS_FAIL, payload: e.message });
  }
};

