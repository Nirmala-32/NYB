
import { createStore } from 'redux';

let initialState={
    count:99
}
let reducerfunction=(state=initialState,action)=>{
    switch(action.type){
        case "Increase":
            //console.log(state)
            return {count:state.count+1}
            case "Decrease":
                return {count:state.count-1}
                case "reset":
                return {count:0}
                default:
                    return state
    }

}
export let store=createStore(reducerfunction)