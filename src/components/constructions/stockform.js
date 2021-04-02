import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Select from "../primitivs/select";
import Input from "../primitivs/input"
import { setstockThunkCreator } from "../../Redux/handInputReduser";


const Form = (props) => {
    let arr = ["сталь1", "сталь2", "сталь3"];
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="stockinput">
                <div className="stock1">
                    <div className="stockfield">
                        <Field component={Select} name={"steel"} arr={arr} required />
                    </div>
                    <div className="stockfield">
                        <Field
                            placeholder={"цена"}
                            lable={"Cost"}
                            component={Input}
                            name={"cost"}
                            required
                        />
                    </div>
                    <div className="stockfield">
                        <Field
                            placeholder={"цена"}
                            lable={"Costcut"}
                            component={Input}
                            name={"costcut"}
                            required
                        />
                    </div>
                    <div className="stockfield">
                        <Field
                            component={Input}
                            name={"forsale"}
                            type={"checkbox"}
                            lable={"Доступно"}
                        />
                    </div>
                    <div className="stockfield">
                        <button className="pushstock">Записать</button>
                    </div>

                </div>
            </div>
        </form>
    )

};

const SetStockReduxForm = reduxForm({ form: "stock" })(Form);

const stockform = (props) => {
    const onSubmit = (values) => {
        props.setstock(values);
        console.log("кнопка нажата")
    };

    return <SetStockReduxForm onSubmit={onSubmit} />
}

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToprops = (dispatch) => {
    return {
        setstock: (value) => {
            dispatch(setstockThunkCreator(value));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToprops)(stockform);