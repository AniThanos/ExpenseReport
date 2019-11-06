import { SET_CATEGORY } from './types'

export const setCategory = data => dispatch => {
    dispatch({
        type: SET_CATEGORY,
        payload: data
    })
}