import { setHolders } from "../API/API";
import {reset} from "redux-form"

let initialState = {
  a: 12,
};

const SET_HOLDERS = "SET-HOLDERS";

const handInputReduser = (state = initialState, action) => {
  let stateCopy;
  stateCopy = { ...state };

  switch (action.type) {
    case SET_HOLDERS:
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
              console.log(response.data)
                if(response.data){
                  console.log(response.data.resultCode)
                    if(response.data.resultCode===0){
                        console.log("inside")
                        dispatch(setHoldersCreator())
                        dispatch(reset('holders'))
                    }
                }
            }
        })
    }
}

export default handInputReduser;
