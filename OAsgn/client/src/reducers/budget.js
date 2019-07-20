import { SET_BUDGET, GET_BUDGET } from '../action/types'

const initialState = 200000;

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_BUDGET:
            return action.payload

        default:
            return state

    }
}
