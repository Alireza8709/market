import { TYPE_CHANGE_CHAT_STATE, TYPE_CHANGE_PICTURE_STATE, TYPE_RESET } from "../ActionTypes"



const initialState={
    hasPicture:false,
    hasChat:false,
}

export const SwitchInputReducer=(state= initialState, actions)=>{  

    switch(actions.type){
        case TYPE_CHANGE_CHAT_STATE:
            return{
                ...state,
                hasChat: !state.hasChat

            }

        case TYPE_CHANGE_PICTURE_STATE:
            return{
                ...state,
                hasPicture: !state.hasPicture
            }
        case TYPE_RESET:
            
            return{
                    ...state,
                    hasPicture: false,
                    hasChat: false
            }

        default:
            return{
                ...state
            }

    }

}