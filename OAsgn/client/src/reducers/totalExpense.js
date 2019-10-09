import {SET_TOTALEXPENSE} from '../action/types'
const initialState=[];

 export default function(state=initialState,action){
    switch(action.type){
        case 'SET_TOTALEXPENSE':
            state=action.payload
            return state;
        
            default:
                return state;
    }
 }