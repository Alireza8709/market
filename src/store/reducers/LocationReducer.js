import { TYPE_CHANGE_CITY, TYPE_RESET } from "../ActionTypes"


const initialState={
    selectedCity:""
}

export const LocationReducer=(state=initialState, actions)=> {

    switch(actions.type){
    case TYPE_CHANGE_CITY:
        return{
            ...state,
            selectedCity: actions.value
        }
    
    case TYPE_RESET:
        return {
            ...state,
            selectedCity: ""
        }

    default:
 
    return{
        ...state
    }

    }
}
