const { getAds } = require("../../services/adsData");
import { TYPE_CHANGE_PAGINATION, TYPE_RESET_PAGINATION } from '../ActionTypes';




const initialState={
    adsItems:getAds(),
    currentPage:1
}


export const AdsReducer=(state=initialState, actions)=>{


    switch(actions.type){
        case TYPE_CHANGE_PAGINATION:
            return{
                ...state,
                currentPage: actions.value
            }
        case TYPE_RESET_PAGINATION:
            return {
                ...state,
                currentPage:1
            }
        default:
            return{
                ...state
            }

    }
}