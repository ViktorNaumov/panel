import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Input from "../primitivs/input";

const Formpay = (props) => {
    return(
  <form onSubmit={props.handleSubmit}>
    <div className="flexcol">
      <div className="payfield">
        <Field
          placeholder={"0"}
          lable={"Номер счёта"}
          component={Input}
          name={"number"}
          required
        />
      </div>
      <div className="payfield">
        <Field
          placeholder={"0"}
          lable={"Сумма"}
          component={Input}
          name={"cost"}
          required
        />
      </div>
      <div className="payfield">
        <output></output>
      </div>
      <div className="payfield">
        <button className="pushpay">Ввод</button>
      </div>
    </div>
  </form>)
};


const SetPayReduxForm = reduxForm({ form: "Pay" })(Formpay);

const payform = (props) => {
  const onSubmit = (value) => {
    // props.setpay(value);
  };

  return <SetPayReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => {
  return {
    //   steelarr: state.handinput.steel,
    //   thicknessarr: state.handinput.thickness,
    //   nameholderarr: state.handinput.nameholder,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    //   setstock: (value) => {
    //     dispatch(setstockThunkCreator(value));
    //   },
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(payform);
