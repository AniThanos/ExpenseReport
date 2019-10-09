import { SET_EXPENSE } from '../action/types';
const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_EXPENSE:
            state = action.payload
            return state
        default:
            return state
    }
}