import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Select from "../primitivs/select";
import { setHoldersThunkCreator } from "../../Redux/handInputReduser";
import Input from "../primitivs/input";

const Formhol = (props) => {


  
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="selhol">
        <div className="flexrow">
          <div className="selection">
            <div className="flexcol">
              <Field component={Input} name={"name"} lable={"Имя"} required />  
              <Field component={Select} name={"thikness"} arr={props.thickness} required />

            </div>
          </div>
          <div className="holders">
            <div className="rec">
              <div className="flexcol">
                <Field
                  component={Input}
                  lable={"A min rec"}
                  name={"Aminrec"}
                  required
                />
                <Field
                  component={Input}
                  lable={"A max rec"}
                  name={"Amaxrec"}
                  required
                />
                <Field
                  component={Input}
                  lable={"B min rec"}
                  name={"Bminrec"}
                  required
                />
                <Field
                  component={Input}
                  lable={"B max rec"}
                  name={"Bmaxrec"}
                  required
                />

                <Field
                  placeholder={"00-0000"}
                  component={Input}
                  lable={"PS1 rec"}
                  name={"PS1rec"}
                  required
                />

                <Field
                  placeholder={"00-0000"}
                  component={Input}
                  lable={"PS2 rec"}
                  name={"PS2rec"}
                  required
                />
              </div>
            </div>
            <div className="tri">
              <div className="flexcol">
                <Field
                  component={Input}
                  lable={"A min tri"}
                  name={"Amintri"}
                  required
                />
                <Field
                  component={Input}
                  lable={"A max tri"}
                  name={"Amaxtri"}
                  required
                />
                <Field
                  component={Input}
                  lable={"B min tri"}
                  name={"Bmintri"}
                  required
                />
                <Field
                  component={Input}
                  lable={"B max tri"}
                  name={"Bmaxtri"}
                  required
                />
                <Field
                  component={Input}
                  lable={"alpha min tri"}
                  name={"alphamintri"}
                  required
                />
                <Field
                  component={Input}
                  lable={"alpha max tri"}
                  name={"alphamaxtri"}
                  required
                />

                <Field
                  placeholder={"00-0000"}
                  component={Input}
                  lable={"PS1 tri"}
                  name={"PS1tri"}
                  required
                />

                <Field
                  placeholder={"max 00"}
                  component={Input}
                  lable={"PS2 tri"}
                  name={"PS2tri"}
                  required
                />
                <Field
                  placeholder={"0"}
                  component={Input}
                  lable={"PS3 tri"}
                  name={"PS3tri"}
                  required
                />
              </div>
            </div>
            <div className="cir">
              <div className="flexcol">
                <Field
                  component={Input}
                  lable={"D min cir"}
                  name={"Dmincir"}
                  required
                />
                <Field
                  component={Input}
                  lable={"D max cir"}
                  name={"Dmaxcir"}
                  required
                />
                <Field
                  placeholder={"00-0000"}
                  component={Input}
                  lable={"PS1 cir"}
                  name={"PS1cir"}
                  required
                />
                <Field
                  placeholder={"0"}
                  component={Input}
                  lable={"PS2 cir"}
                  name={"PS2cir"}
                  required
                />
              </div>
            </div>
            <div className="was">
              <div className="flexcol">
                <Field
                  component={Input}
                  lable={"D min was"}
                  name={"Dminwas"}
                  required
                />
                <Field
                  component={Input}
                  lable={"D max was"}
                  name={"Dmaxwas"}
                  required
                />
                <Field
                  component={Input}
                  lable={"d min was"}
                  name={"dminwas"}
                  required
                />
                <Field
                  component={Input}
                  lable={"d max was"}
                  name={"dmaxwas"}
                  required
                />
                <Field
                  placeholder={"00-0000"}
                  component={Input}
                  lable={"PS1 was"}
                  name={"PS1was"}
                  required
                />

                <Field
                  placeholder={"00-0000"}
                  component={Input}
                  lable={"PS2 was"}
                  name={"PS2was"}
                  required
                />
                <Field
                  placeholder={"0"}
                  component={Input}
                  lable={"PS3 was"}
                  name={"PS3was"}
                  required
                />
              </div>
            </div>
            <div className="sec">
              <div className="flexcol">
                <Field
                  component={Input}
                  lable={"d min sec"}
                  name={"dminsec"}
                  required
                />
                <Field
                  component={Input}
                  lable={"d max sec"}
                  name={"dmaxsec"}
                  required
                />
                <Field
                  component={Input}
                  lable={"h min sec"}
                  name={"hminsec"}
                  required
                />
                <Field
                  component={Input}
                  lable={"h max sec"}
                  name={"hmaxsec"}
                  required
                />
                
                <Field
                  component={Input}
                  lable={"alpha min sec"}
                  name={"alphaminsec"}
                  required
                />
                <Field
                  component={Input}
                  lable={"alpha max sec"}
                  name={"alphamaxsec"}
                  required
                />
                <Field
                  placeholder={"00-0000"}
                  component={Input}
                  lable={"PS1 sec"}
                  name={"PS1sec"}
                  required
                />
                <Field
                  placeholder={"00-0000"}
                  component={Input}
                  lable={"PS2 sec"}
                  name={"PS2sec"}
                  required
                />
                <Field
                  placeholder={"max 00"}
                  component={Input}
                  lable={"PS3 sec"}
                  name={"PS3sec"}
                  required
                />
                <Field
                  placeholder={"0"}
                  component={Input}
                  lable={"PS4 sec"}
                  name={"PS4sec"}
                  required
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <button className="pushholders">Записать</button>
    </form>
  );
};

const HoldersReduxForm = reduxForm({ form: "holders" })(Formhol);

const holdersform = (props) => {
  const onSubmit = (values) => {
    props.setholders(values);
    console.log("кнопка нажата")
  };

  return <HoldersReduxForm onSubmit={onSubmit} thickness={props.thickness} />;
};

const mapStateToProps = (state) => {


  return {
    thickness:state.handinput.thickness
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    setholders: (value) => {
      dispatch(setHoldersThunkCreator(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(holdersform);
