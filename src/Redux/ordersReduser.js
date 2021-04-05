import { getOrder, getOrderCost, setOrderPayment, getOrderPayment } from "../API/API"


const initialState = {
    a: 12,
    errorOrder: { error: false, mesage: "номер заказа не найден" },
    errorOrderCost: { error: false, mesage: "Сумма заказа не совпадает" },
    errorSetOrderPayment: { error: false, mesage: "Ошибка сервера" },
    errorAcseptingPayment: { error: false, mesage: "Запись не сделана" },
    acseptingPayments: { acsepting: false, mesage: "Данные записаны" },
    
}

const ERROR_ORDER = "ERROR-ORDER";
const ERROR_ORDER_COST = "ERROR-ORDER-COST";
const ERROR_SET_ORDER_PAYMENT = "ERROR-SET-ORDER-PAYMENT";
const ERROR_ACSEPTING_PAYMENT = "ERROR-ACSEPTING-PAYMENT";
const ACSEPTING_PAYMENT = "ACSEPTING-PAYMENT";

const ordersReduser = (state = initialState, action) => {
    let stateCopy;
    stateCopy = { ...state };

    switch (action.type) {
        case ERROR_ORDER:
            stateCopy.errorOrder = { ...stateCopy.errorOrder, error: true }
            return stateCopy
        case ERROR_ORDER_COST:
            stateCopy = { ...stateCopy.errorOrderCost, error: true }
            return stateCopy
        case ERROR_SET_ORDER_PAYMENT:
            stateCopy = { ...stateCopy.errorSetOrderPayment, error: true }
            return stateCopy
        case ERROR_ACSEPTING_PAYMENT:
            stateCopy = {  ...stateCopy.errorAcseptingPayment, error: true }
            return stateCopy
        case ACSEPTING_PAYMENT:
            stateCopy = { ...stateCopy.acseptingPayments, acseptingPayments: true }
            return stateCopy
        default:
            return state


    }

}

export const errorOrderCreator = () => {
    return {
        type: ERROR_ORDER,

    }
}

export const errorOrderCostCreator = () => {
    return {
        type: ERROR_ORDER_COST,

    }
}

export const errorSetOrderPaymentCreator = () => {
    return {
        type: ERROR_SET_ORDER_PAYMENT,

    }
}

export const errorAcseptingPaymentCreator = () => {
    return {
        type: ERROR_ACSEPTING_PAYMENT,

    }
}

export const acseptingPaymentCreator = () => {
    return {
        type: ACSEPTING_PAYMENT,

    }
}


export const setOrderPaymentThunkCreator = (value) => {
    return (dispatch) => {
        getOrder(value.number)
            .then((response) => {
                console.log(response.data.resultCode)
                if (response.data.resultCode === 0) {
                    getOrderCost(value.cost)
                        .then((response) => {
                            if (response) {
                                setOrderPayment(value)
                                    .then((response) => {
                                        if (response.data.resultCode === 0) {
                                            getOrderPayment(value.number)
                                                .then((response) => {
                                                    if (response) {
                                                        dispatch(acseptingPaymentCreator())
                                                    } else {
                                                        dispatch(errorAcseptingPaymentCreator())
                                                    }
                                                })
                                        } else {
                                            dispatch(errorSetOrderPaymentCreator())
                                        }
                                    })
                            } else {
                                dispatch(errorOrderCostCreator())
                            }
                        })
                } else {
                    dispatch(errorOrderCreator())
                }


            })

    }
}

export default ordersReduser;