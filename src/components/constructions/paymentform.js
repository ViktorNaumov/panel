import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Input from "../primitivs/input";
import { setOrderPaymentThunkCreator } from "../../Redux/ordersReduser";

const Formpay = (props) => {
  return (
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
          {props.errorSetOrderPayment.error ? (
            <output>{props.errorSetOrderPayment.mesage}</output>
          ) : null}
          {props.errorAcseptingPayment.error ? (
            <output>{props.errorAcseptingPayment.mesage}</output>
          ) : null}
          {props.acseptingPayments.acsepting ? (
            <output>{props.acseptingPayments.mesage}</output>
          ) : null}
        </div>
        <div className="payfield">
          <button className="pushpay">Ввод</button>
        </div>
      </div>
    </form>
  );
};

const SetPayReduxForm = reduxForm({ form: "Pay" })(Formpay);

const payform = (props) => {
  const onSubmit = (value) => {
    props.setOrderPayment(value);
    console.log("кнопка нажата")
  };

  return (
    <SetPayReduxForm
      onSubmit={onSubmit}
      errorSetOrderPayment={props.errorSetOrderPayment}
      errorAcseptingPayment={props.errorAcseptingPayment}
      acseptingPayments={props.acseptingPayments}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    errorSetOrderPayment: state.orders.errorSetOrderPayment,
    errorAcseptingPayment: state.orders.errorAcseptingPayment,
    acseptingPayments: state.orders.acseptingPayments,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    setOrderPayment: (value) => {
      dispatch(setOrderPaymentThunkCreator(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(payform);
