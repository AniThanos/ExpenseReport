import { combineReducers } from 'redux'
import budget from './budget'
import category from './category'
import expense from './expense'
import totalExpense from './totalExpense'
export default combineReducers({
    budget,
    category,
    expense,
    totalExpense
})