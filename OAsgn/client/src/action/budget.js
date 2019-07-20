import { SET_BUDGET } from './types'

export const setBudget = (data) => dispatch => {
    dispatch({
        type: SET_BUDGET,
        payload: data
    });

}
