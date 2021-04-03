import React from "react";
import { connect } from "react-redux";
import Stockwindow from "../components/windows/stockwindow";
import {
  getNameholderThunkCreator,
  getsteelThunkCreator,
  getthicknessThunkCreator,
} from "../Redux/handInputReduser";

class StockWindContainer extends React.Component {
  componentDidMount() {
    this.props.getsteel(this.props.steel);
    this.props.getthickness(this.props.thickness);
    this.props.getnameholder(this.props.nameholder);
  }

  render() {
    return <Stockwindow />;
  }
}

const mapStateToProps = (state) => {
  return {
    steel: state.handinput.steel,
    thickness: state.handinput.thickness,
    nameholder: state.handinput.nameholder,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    getsteel: (steelarr) => {
      dispatch(getsteelThunkCreator(steelarr));
    },
    getthickness: (thicknessarr) => {
      dispatch(getthicknessThunkCreator(thicknessarr));
    },
    getnameholder: (nameholderarr) => {
      dispatch(getNameholderThunkCreator(nameholderarr));
    },
  };
};

const StockdwindContainer = connect(
  mapStateToProps,
  mapDispatchToprops
)(StockWindContainer);
export default StockdwindContainer;
