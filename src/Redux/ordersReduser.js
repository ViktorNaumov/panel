import { getOrder, getOrderCost, setOrderPayment, getOrderPayment } from "../API/API"


const initialState = {
    a: 12,
    errorOrder: { error: false, mesage: "номер заказа не найден" },
    errorOrderCost: { error: false, mesage: "Сумма заказа не совпадает" },
    errorSetOrderPayment: { error: false, mesage: "Ошибка сервера" },
    errorAcseptingPayment: { error: false, mesage: "Запись не сделана" },
    acseptingPayments: { acsepting: false, mesage: "Данные записаны" }
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
            stateCopy = { ...stateCopy, ...stateCopy.errorOrder.errore, errore: true }
            return stateCopy
        case ERROR_ORDER_COST:
            stateCopy = { ...stateCopy, ...stateCopy.errorOrderCost.errore, errore: true }
            return stateCopy
        case ERROR_SET_ORDER_PAYMENT:
            stateCopy = { ...stateCopy, ...stateCopy.errorSetOrderPayment.errore, errore: true }
            return stateCopy
        case ERROR_ACSEPTING_PAYMENT:
            stateCopy = { ...stateCopy, ...stateCopy.errorAcseptingPayment.errore, errore: true }
            return stateCopy
        case ACSEPTING_PAYMENT:
            stateCopy = { ...stateCopy, ...stateCopy.acseptingPayments, acseptingPayments: true }
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


export const getOrderThunkCreator = (value) => {
    return (dispatch) => {
        getOrder(value.number)
            .then((response) => {
                if (response) {
                    getOrderCost(value.cost)
                        .then((response) => {
                            if (response) {
                                setOrderPayment(value)
                                    .then((response) => {
                                        if (response.data.resultCode === 0) {
                                            getOrderPayment(value.number)
                                                .then((response) => {
                                                    if (response) {
                                                        acseptingPaymentCreator()
                                                    } else {
                                                        errorAcseptingPaymentCreator()
                                                    }
                                                })
                                        } else {
                                            errorSetOrderPaymentCreator()
                                        }
                                    })
                            } else {
                                errorOrderCostCreator()
                            }
                        })
                } else {
                    errorOrderCreator()
                }


            })

    }
}

export default ordersReduser;