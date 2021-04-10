import React from "react";
import { connect } from "react-redux";
import Requestwindow from "../components/windows/requestwindow";
import { getRequestThunkCreator } from "../Redux/requestReduser";

class RequestWindContainer extends React.Component {
    componentDidMount(){
        this.props.getrequests()
    }

    render(){
        return <Requestwindow />
        
    }
}

const mapStateToProps = (state) => {

    return {
    //   thicknessarr: state.handinput.thickness,
    };
  };
  const mapDispatchToprops = (dispatch) => {
    return {
        getrequests : (value) =>{
            dispatch(getRequestThunkCreator(value))
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