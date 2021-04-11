import React from "react";
import { connect } from "react-redux";
import Requestwindow from "../components/windows/requestwindow";
import { getDataRequestThunkCreator, getRequestThunkCreator } from "../Redux/requestReduser";

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