import React from "react";
import { connect } from "react-redux";
import Requestwindow from "../components/windows/requestwindow";
import { choiceRequestCreator, getDataRequestThunkCreator, getRequestThunkCreator } from "../Redux/requestReduser";

class RequestWindContainer extends React.Component {
    componentDidMount(){
        this.props.getrequests()
    }

    render(){
        
        return <Requestwindow {...this.props} />
        
    }
}

const mapStateToProps = (state) => {

    return {
        requests: state.requests.requests,
        choicerequest: state.requests.choicerequest
    //   thicknessarr: state.handinput.thickness,
    };
  };
  const mapDispatchToprops = (dispatch) => {
    return {
        getrequests : (value) =>{
            dispatch(getRequestThunkCreator(value))
        },
        getdatarequest:(value) =>{
            dispatch(getDataRequestThunkCreator(value))
        },
        choice:(value)=>{
            dispatch(choiceRequestCreator(value))
        }
    //   getthickness: (thicknessarr) => {
    //     dispatch(getthicknessThunkCreator(thicknessarr));
    //   },
    };
  };
  const RequestwindContainer = connect(
    mapStateToProps,
    mapDispatchToprops
  )(RequestWindContainer);
  export default RequestwindContainer;