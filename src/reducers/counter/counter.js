import { DECREMENT, INCREMENT, SET_COUNT } from '../../actions/counter/counter'
import { createReducer } from '../utils'

const initialState = {
    count: 0,
}

export default createReducer(initialState, {
    [DECREMENT]: decrement,
    [INCREMENT]: increment,
    [SET_COUNT]: setCount,
})

function decrement(state, action) {
    return {
        ...state,
        count: state.count - action.payload || 1,
    }
}

function increment(state, action) {
    return {
        ...state,
        count: state.count + action.payload || 1,
    }
}

function setCount(state, action) {
    return {
        count:
            typeof action.payload === 'number' ? action.payload : state.count,
    }
}
