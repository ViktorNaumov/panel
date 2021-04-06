import { getOrder, getOrderCost, setOrderPayment, getOrderPayment } from "../API/API"


const initialState = {
    a: 12,
    errorOrder: { error: false, mesage: "номер заказа не найден" },
    errorOrderCost: { error: false, mesage: "Сумма заказа не совпадает" },
    errorSetOrderPayment: { error: false, mesage: "Ошибка сервера" },
    errorAcseptingPayment: { error: false, mesage: "Запись не сделана" },
    acseptingPayments: { acsepting: false, mesage: "Данные записаны" },
    errorWasPaid: { waspaid: false, mesage: "товар был оплачен ранее" }

}

const ERROR_ORDER = "ERROR-ORDER";
const ERROR_ORDER_COST = "ERROR-ORDER-COST";
const ERROR_SET_ORDER_PAYMENT = "ERROR-SET-ORDER-PAYMENT";
const ERROR_ACSEPTING_PAYMENT = "ERROR-ACSEPTING-PAYMENT";
const ACSEPTING_PAYMENT = "ACSEPTING-PAYMENT";
const ERROR_WAS_PAID = "ERROR-WAS-PAID"

const ordersReduser = (state = initialState, action) => {
    let stateCopy;
    stateCopy = { ...state };

    switch (action.type) {
        case ERROR_ORDER:
            stateCopy.errorOrder = { ...state.errorOrder, error: true }
            stateCopy.errorOrderCost = { ...state.errorOrderCost, error: false }
            stateCopy.errorSetOrderPayment = { ...state.errorSetOrderPayment, error: false }
            stateCopy.errorAcseptingPayment = { ...state.errorAcseptingPayment, error: false }
            stateCopy.acseptingPayments = { ...state.acseptingPayments, acseptingPayments: false }
            stateCopy.errorWasPaid = { ...state.errorWasPaid, waspaid: false}
            return stateCopy
        case ERROR_ORDER_COST:
            stateCopy.errorOrderCost = { ...state.errorOrderCost, error: true }
            stateCopy.errorSetOrderPayment = { ...state.errorSetOrderPayment, error: false }
            stateCopy.errorAcseptingPayment = { ...state.errorAcseptingPayment, error: false }
            stateCopy.acseptingPayments = { ...state.acseptingPayments, acseptingPayments: false }
            stateCopy.errorWasPaid = { ...state.errorWasPaid, waspaid: false}
            stateCopy.errorOrder = { ...state.errorOrder, error: false }
            return stateCopy
        case ERROR_SET_ORDER_PAYMENT:
            stateCopy.errorSetOrderPayment = { ...state.errorSetOrderPayment, error: true }
            stateCopy.errorAcseptingPayment = { ...state.errorAcseptingPayment, error: false }
            stateCopy.acseptingPayments = { ...state.acseptingPayments, acseptingPayments: false }
            stateCopy.errorWasPaid = { ...state.errorWasPaid, waspaid: false}
            stateCopy.errorOrder = { ...state.errorOrder, error: false }
            stateCopy.errorOrderCost = { ...state.errorOrderCost, error: false }
            return stateCopy
        case ERROR_ACSEPTING_PAYMENT:
            stateCopy.errorAcseptingPayment = { ...state.errorAcseptingPayment, error: true }
            stateCopy.acseptingPayments = { ...state.acseptingPayments, acseptingPayments: false }
            stateCopy.errorWasPaid = { ...state.errorWasPaid, waspaid: false}
            stateCopy.errorOrder = { ...state.errorOrder, error: false }
            stateCopy.errorOrderCost = { ...state.errorOrderCost, error: false }
            stateCopy.errorSetOrderPayment = { ...state.errorSetOrderPayment, error: false }
            return stateCopy
        case ACSEPTING_PAYMENT:
            stateCopy.acseptingPayments = { ...state.acseptingPayments, acseptingPayments: true }
            stateCopy.errorWasPaid = { ...state.errorWasPaid, waspaid: false}
            stateCopy.errorOrder = { ...state.errorOrder, error: false }
            stateCopy.errorOrderCost = { ...state.errorOrderCost, error: false }
            stateCopy.errorSetOrderPayment = { ...state.errorSetOrderPayment, error: false }
            stateCopy.errorAcseptingPayment = { ...state.errorAcseptingPayment, error: false }
            return stateCopy
        case ERROR_WAS_PAID:
            stateCopy.errorWasPaid = { ...state.errorWasPaid, waspaid: true}
            stateCopy.errorOrder = { ...state.errorOrder, error: false }
            stateCopy.errorOrderCost = { ...state.errorOrderCost, error: false }
            stateCopy.errorSetOrderPayment = { ...state.errorSetOrderPayment, error: false }
            stateCopy.errorAcseptingPayment = { ...state.errorAcseptingPayment, error: false }
            stateCopy.acseptingPayments = { ...state.acseptingPayments, acseptingPayments: false }
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

export const errorWasPaidCreator = () => {
    return {
        type: ERROR_WAS_PAID
    }
}


export const setOrderPaymentThunkCreator = (value) => {
    return (dispatch) => {
        getOrder(value.number)
            .then((response) => {
                console.log(response.data.resultCode)
                if (response.data.resultCode === 0) {
                    if (response.data.value.payment === 0) {
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
                        dispatch(errorWasPaidCreator())
                    }

                } else {
                    dispatch(errorOrderCreator())
                }


            })

    }
}

export default ordersReduser;