import {getRequest} from "../API/API"

const GET_REQUEST ="GET-REQUEST";

const initialState = {
    requests : []
}

const requestReduser = (state = initialState , action) =>{
    // let stateCopy;
    // stateCopy = { ...state };


    switch (action.type) {
        // case ddddd:
            
        //     return stateCopy
    }
return state;
}

export const getRequestCreator = () => {
    return {
        type: GET_REQUEST,

    }
}

export const getRequestThunkCreator = () =>{
    return (dispatch) =>{
        getRequest(1)
        .then((response)=>{
            if(response){
                if(response.data){
                    if(response.data.value){
                        console.log(response.data.value)
                    }
                }
            }
        })
    }
}

export default requestReduser;