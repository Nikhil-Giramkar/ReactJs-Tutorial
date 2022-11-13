import {combineReducers} from "redux"
import reducerAmount from "./reducerAmount"

//if we contain multiple reducers, we can combinely export them

const reducers = combineReducers({

    amount: reducerAmount
})

export default reducers