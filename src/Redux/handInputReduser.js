import {
  getNameholder,
  getSteel,
  getThickness,
  setHolders,
  setstock,
} from "../API/API";
import { reset } from "redux-form";

let initialState = {
  a: 12,
  steel: [],
  thickness: [],
  nameholder: [],
};

const SET_HOLDERS = "SET-HOLDERS";
const SET_STOCK = "SET-STOCK";
const GET_THICKNESS = "GET-THICKNESS";
const GET_STEEL = "GET-STEEL";
const GET_NAMEHOLDER = "GET-NAMEHOLDER";

const handInputReduser = (state = initialState, action) => {
  let stateCopy;
  stateCopy = { ...state };

  switch (action.type) {
    case SET_HOLDERS:
      return stateCopy;
    case SET_STOCK:
      return stateCopy;
    case GET_THICKNESS:
      let arr = [];
      for (let i = 0; i < action.thickness.length; i++) {
        arr.push(action.thickness[i].thickness);
      }
      stateCopy = { ...stateCopy,...stateCopy.thickness, thickness: arr };
      return stateCopy;
    case GET_STEEL:
      let arr0 = [];
      for (let i = 0; i < action.steel.length; i++) {
        arr0.push(action.steel[i].steel);
      }
      stateCopy = { ...stateCopy,...stateCopy.steel, steel: arr0 };
      return stateCopy;
    case GET_NAMEHOLDER:
      let arr1 = [];
      for (let i = 0; i < action.nameholder.length; i++) {
        arr1.push(action.nameholder[i].name);
      }
      stateCopy = {...stateCopy,...stateCopy.nameholder, nameholder: arr1 };
      return stateCopy;
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

export const setHoldersThunkCreator = (value) => {
  return (dispatch) => {
    setHolders(value).then((response) => {
      if (response) {
        if (response.data) {
          if (response.data.resultCode === 0) {
            dispatch(setHoldersCreator());
            dispatch(reset("holders"));
          }
        }
      }
    });
  };
};

export const setStockCreator = (value) => {
  return {
    type: SET_STOCK,
    value: value,
  };
};

export const setstockThunkCreator = (value) => {
  return (dispatch) => {
    setstock(value).then((response) => {
      if (response) {
        if (response.data) {
          if (response.data.resultCode === 0) {
            dispatch(setStockCreator());
            dispatch(reset("stock"));
          }
        }
      }
    });
  };
};

export const getThicknessCreator = (value) => {
  return {
    type: GET_THICKNESS,
    thickness: value,
  };
};

export const getthicknessThunkCreator = (thicknessarr) => {
  return (dispatch) => {
    if (thicknessarr.length === 0) {
      getThickness()
        .then((response) => {
          if (response) {
            if (response.data) {
              if (response.data.value) {
                console.log(response.data.value);
                dispatch(getThicknessCreator(response.data.value));
              }
            }
          }
        })
        .catch(function (error) {});
    }
  };
};

export const getSteelCreator = (value) => {
  return {
    type: GET_STEEL,
    steel: value,
  };
};

export const getsteelThunkCreator = (steel) => {
  return (dispatch) => {
    if (steel.length === 0) {
      getSteel()
        .then((response) => {
          if (response) {
            if (response.data) {
              if (response.data.value) {
                console.log(response.data.value);
                dispatch(getSteelCreator(response.data.value));
              }
            }
          }
        })
        .catch(function (error) {});
    }
  };
};

export const getNameholderCreator = (value) => {
  return {
    type: GET_NAMEHOLDER,
    nameholder: value,
  };
};

export const getNameholderThunkCreator = (nameholder) => {
  return (dispatch) => {
    if (nameholder.length === 0) {
      getNameholder()
        .then((response) => {
          if (response) {
            if (response.data) {
              if (response.data.value) {
                console.log(response.data.value);
                dispatch(getNameholderCreator(response.data.value));
              }
            }
          }
        })
        .catch(function (error) {});
    }
  };
};

export default handInputReduser;
