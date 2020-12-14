
import { getCategories } from '../../services/adsData';
import { TYPE_CHOOSE_CATEGORY, TYPE_RESET } from '../ActionTypes';

const initialState={
    selectedCategory:0,
    categoriesList:getCategories()
}

export const CategoriesReducer=(state= initialState, actions)=>{
    switch(actions.type){
        case TYPE_CHOOSE_CATEGORY:
            return{
                ...state,
                selectedCategory:actions.value
            }
        case TYPE_RESET:
            return{
                ...state,
                selectedCategory: 0
            }
        default:
            return {
                ...state
            }
    }



}