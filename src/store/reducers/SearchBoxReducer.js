
import { TYPE_RESET, TYPE_SERACH_BOX_TEXT_CHANGE } from '../ActionTypes';

const initialState={
    searchKey:""
}

export const SearchBoxReducer=(state=initialState, actions)=>{

    switch(actions.type){
        case TYPE_SERACH_BOX_TEXT_CHANGE:
            let test=actions.value
            return{
                ...state,
                searchKey: test.target.value
            }

        case TYPE_RESET:
            
                return{
                    ...state,
                    searchKey:""
                }

        default:
            return{
                ...state
            }
            
    }

}