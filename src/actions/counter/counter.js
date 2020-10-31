const MODULE_ID = '@COUNTER/'

export const INCREMENT = MODULE_ID + 'INCREMENT'
export const DECREMENT = MODULE_ID + 'DECREMENT'
export const SET_COUNT = MODULE_ID + 'SET_COUNT'

export const increment = (value = 1) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}

export const decrement = (value = 1) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}

export const setCount = (value = 0) => {
    return {
        type: SET_COUNT,
        payload: value,
    }
}
