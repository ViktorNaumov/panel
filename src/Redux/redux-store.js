import { createStore, combineReducers,applyMiddleware} from "redux";
import handInputReduser from "./handInputReduser";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk"
import ordersReduser from "./ordersReduser";
import requestReduser from "./requestReduser";



let redusers = combineReducers({
    handinput: handInputReduser,
    orders: ordersReduser,
    requests: requestReduser,
     form : formReducer 
});
let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store=store;

export default store;