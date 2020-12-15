import { TYPE_CHANGE_PAGINATION, TYPE_RESET_PAGINATION } from '../ActionTypes';
import { getAds } from '../../services/adsData.js';

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