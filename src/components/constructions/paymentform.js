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
           {props.errorOrder.error ? (
            <output>{props.errorOrder.mesage}</output>
          ) : null}
            {props.errorWasPaid.waspaid ? (
            <output>{props.errorWasPaid.mesage}</output>
          ) : null} 
          {props.errorOrderCost.error ? (
            <output>{props.errorOrderCost.mesage}</output>
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
  };

  return (
    <SetPayReduxForm
      onSubmit={onSubmit}
      errorSetOrderPayment={props.errorSetOrderPayment}
      errorAcseptingPayment={props.errorAcseptingPayment}
      acseptingPayments={props.acseptingPayments}
      errorOrder ={props.errorOrder}
      errorOrderCost ={props.errorOrderCost}
      errorWasPaid = {props.errorWasPaid}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    errorOrder: state.orders.errorOrder,
    errorOrderCost: state.orders.errorOrderCost,
    errorSetOrderPayment: state.orders.errorSetOrderPayment,
    errorAcseptingPayment: state.orders.errorAcseptingPayment,
    acseptingPayments: state.orders.acseptingPayments,
    errorWasPaid: state.orders.errorWasPaid
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
