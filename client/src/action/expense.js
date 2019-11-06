import {SET_EXPENSE} from './types'

export const setExpense =(data)=>dispatch=>{
  dispatch({
      type:SET_EXPENSE,
      payload:data
  })  
}