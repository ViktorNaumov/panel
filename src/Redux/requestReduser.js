import {getRequest, getDataRequest,setDataRequest} from "../API/API"

const GET_REQUEST ="GET-REQUEST";
const CHOICE_REQUEST ="CHOICE-REQUEST"


const initialState = {
    requests : [],
    choicerequest : 0
}

const requestReduser = (state = initialState , action) =>{
    let stateCopy;
    stateCopy = { ...state };


    switch (action.type) {
        case GET_REQUEST:
           stateCopy = {...state,requests:action.array} 
            return stateCopy;
        case CHOICE_REQUEST:
            stateCopy = {...state,choicerequest:action.request}
            return stateCopy
        default:
            return state;
    }

}

export const getRequestCreator = (value) => {
    return {
        type: GET_REQUEST,
        array : value

    }
}

export const getRequestThunkCreator = () =>{
    return (dispatch) =>{
        getRequest(1)
        .then((response)=>{
            if(response){
                if(response.data){
                    if(response.data.resultCode === 0){
                        dispatch(getRequestCreator(response.data.value))
                        console.log(response.data)
                    }
                }
            }
        })
    }
}

export const getDataRequestThunkCreator = (value) =>{
    console.log(value)
    return (dispatch) =>{
        getDataRequest(value)
        .then((value)=>{
            console.log(value.data.value)
            setDataRequest(value.data.value)
        })
        
    }
}

export const choiceRequestCreator = (value) =>{
    return{
        type: CHOICE_REQUEST,
        request : value
    }
}











export default requestReduser;