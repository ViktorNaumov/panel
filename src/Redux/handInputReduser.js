import { setHolders, setstock } from "../API/API";
import {reset} from "redux-form"

let initialState = {
  a: 12,
};

const SET_HOLDERS = "SET-HOLDERS";
const SET_STOCK = "SET-STOCK";

const handInputReduser = (state = initialState, action) => {
  let stateCopy;
  stateCopy = { ...state };

  switch (action.type) {
    case SET_HOLDERS:
        return stateCopy
    case SET_STOCK:
        return stateCopy
    default:
      return state;
  }
};

export const setHoldersCreator = (value) => {
  return {
    type: SET_HOLDERS,
    value: value,
  };
};

export const setHoldersThunkCreator =(value)=>{
    return (dispatch)=>{
        setHolders(value)
        .then((response)=>{
            if(response){
                if(response.data){
                    if(response.data.resultCode===0){
                        dispatch(setHoldersCreator())
                        dispatch(reset('holders'))
                    }
                }
            }
        })
    }
}

export const setStockCreator = (value) => {
  return {
    type: SET_STOCK,
    value: value,
  };
};

export const setstockThunkCreator=(value)=>{
  return(dispatch)=>{
    setstock(value)
    .then((response)=>{
      if (response){
        if(response.data){
          if(response.data.resultCode===0){
            dispatch(setStockCreator())
            dispatch(reset('stock'))
        }
        }
      }
    })
  }
}


export default handInputReduser;
