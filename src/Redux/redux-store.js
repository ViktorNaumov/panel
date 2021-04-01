import { createStore, combineReducers,applyMiddleware} from "redux";
import handInputReduser from "./handInputReduser";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk"



let redusers = combineReducers({
    handinput: handInputReduser,
     form : formReducer 
});
let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store=store;

export default store;