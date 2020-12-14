import { TYPE_CHANGE_PRICE, TYPE_RESET } from "../ActionTypes"


const initialState={
    price:{
        minPrice:0,
        maxPrice:0
    }
}


export const PriceReducer=(state=initialState, actions)=>{

    switch(actions.type){
        case TYPE_CHANGE_PRICE:
        let test2=state.price;    
        let test=actions.value;

        test2[test.target.name]=parseInt(test.target.value);
        
            return{
                ...state,
                price: test2
            }

        case TYPE_RESET:

                return{
                    ...state,
                    price: {
                        minPrice: 0,
                        maxPrice: 0
                    }
                }

        default:
            return{
                ...state
            }
    }


}