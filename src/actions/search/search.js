const MODULE_ID = '@SEARCH/'

export const SET_SEARCH = MODULE_ID + 'SET_SEARCH'

export const setSearch = (value = '') => {
    return {
        type: SET_SEARCH,
        payload: value,
    }
}
