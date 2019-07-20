import { SET_CATEGORY } from '../action/types'

const initialState = ['Grocery', 'Travel', 'medical'];

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY:
            let temp = state.slice()
            temp.push(action.payload)
            return temp

        default:
            return state

    }
}
