import { TYPE_CHANGE_TAGS, TYPE_RESET } from "../ActionTypes"
import { getTags } from "../../services/adsData";


const initalState={
    selectedTag:0,
    tagItems: getTags()
}


export const TagsReducer=(state=initalState, actions)=>{


    switch(actions.type){
        case TYPE_CHANGE_TAGS:
            return{
                ...state,
                selectedTag: (actions.value ===state.selectedTag)?0:actions.value 
            }
        case TYPE_RESET:
            return{
                ...state,
                selectedTag: 0,
            }
        

        default:
            return{
                ...state
            }
      
    }
}