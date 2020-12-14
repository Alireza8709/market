
import { TYPE_CHANGE_CHAT_STATE, TYPE_CHANGE_PRICE, TYPE_CHOOSE_CATEGORY, TYPE_CHANGE_PICTURE_STATE, TYPE_SERACH_BOX_TEXT_CHANGE, TYPE_CHANGE_TAGS, TYPE_RESET, TYPE_CHANGE_CITY, TYPE_RESET_PAGINATION, TYPE_CHANGE_PAGINATION } from './ActionTypes';

// Category
export const chooseCategory=(categoryId)=>({
    type:TYPE_CHOOSE_CATEGORY,
    value:categoryId
});

// Price
export const changePrice=(event)=>({
    type:TYPE_CHANGE_PRICE,
    value: event
});

// SwitchInput
export const changeChatState=()=>({
    type: TYPE_CHANGE_CHAT_STATE,
});

export const changePictureState=()=>({
    type: TYPE_CHANGE_PICTURE_STATE,
});

// Search Box
export const changeSearchBoxText=(event)=>({
    type: TYPE_SERACH_BOX_TEXT_CHANGE,
    value:event
});

// Tags
export const changeTags=(tagId)=>({
    type: TYPE_CHANGE_TAGS,
    value:tagId
});

// reset
export const reset=()=>({
    type: TYPE_RESET
});

// location
export const changeCity=(city)=> ({
    type: TYPE_CHANGE_CITY,
    value: city
});

// pagination
export const resetPagination=()=>({
    type: TYPE_RESET_PAGINATION
});

export const changePagination=(page)=>({
    type: TYPE_CHANGE_PAGINATION,
    value: page
});

