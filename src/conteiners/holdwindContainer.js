import React from "react";
import { connect } from "react-redux";
import Holderswindow from "../components/windows/holderswindow";
import { getthicknessThunkCreator } from "../Redux/handInputReduser";

class HoldWindContainer extends React.Component {
  componentDidMount() {
    this.props.getthickness(this.props.thicknessarr)  
  }

  render() {
    return <Holderswindow />;
  }
}

const mapStateToProps = (state) => {

  return {
    thicknessarr: state.handinput.thickness,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    getthickness: (thicknessarr) => {
      dispatch(getthicknessThunkCreator(thicknessarr));
    },
  };
};
const HoldwindContainer = connect(
  mapStateToProps,
  mapDispatchToprops
)(HoldWindContainer);
export default HoldwindContainer;
