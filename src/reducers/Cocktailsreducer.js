
import {ALL_COCKTAILS_FAIL, ALL_COCKTAILS_REQUEST, ALL_COCKTAILS_SUCCESS, ONLY_COCKTAILS_FAIL, ONLY_COCKTAILS_REQUEST, ONLY_COCKTAILS_SUCCESS} from "../constants/Cocktail";

export const AllCocktailsReducer=(state={Allcocktails:[],loading:true},action)=>{
    switch(action.type){
        case ALL_COCKTAILS_REQUEST:
            return {loading:true};
        case ALL_COCKTAILS_SUCCESS:
            console.log("here re")
            console.log(action.payload)
            
            return {loading:false,Allcocktails:action.payload}  
        case ALL_COCKTAILS_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;          
    }
}

export const OnlyCocktailsReducer=(state={Onlycocktail:{},loading2:true},action)=>{
    switch(action.type){
        case ONLY_COCKTAILS_REQUEST:
            return {loading2:true};
        case ONLY_COCKTAILS_SUCCESS:
            console.log("d only is")
            console.log(action.payload)
            
            return {loading2:false,Onlycocktail:action.payload}  
        case ONLY_COCKTAILS_FAIL:
            return {loading2:false,error:action.payload}
        default:
            return state;          
    }
}