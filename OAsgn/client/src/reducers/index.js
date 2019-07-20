import { combineReducers } from 'redux'
import budget from './budget'
import category from './category'
export default combineReducers({
    budget,
    category
})