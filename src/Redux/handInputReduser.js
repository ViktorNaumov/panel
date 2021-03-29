import { setHolders } from "../API/API";

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
                if(response.data){
                    if(response.data.resultcode===0){
                        dispatch(setHoldersCreator())
                    }
                }
            }
        })
    }
}

export default handInputReduser;
