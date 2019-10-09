import {SET_TOTALEXPENSE} from './types'

export const  setTotalExpense =data=>dispatch=>{
 dispatch({
     type:SET_TOTALEXPENSE,
     payload:data
 })
}