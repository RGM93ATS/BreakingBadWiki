import { SET_SEARCH } from '../../actions/search/search'
import { createReducer } from '../utils'

const initialState = {
    search: '',
}

export default createReducer(initialState, {
    [SET_SEARCH]: setSearch,
})

function setSearch(state, action) {
    return {
        search: action.payload || state.search,
    }
}
