import thunk from "redux-thunk"
import { combineReducers  } from "redux"
import { applyMiddleware } from "redux"
import { Signupreducer } from "./Reducers/SignupReducer"
import { Loginreducer } from "./Reducers/LoginReducer"


const rootReducer = combineReducers({
   
    SignupFatch : Signupreducer,
    LoginFatch : Loginreducer
})

export const  store = createStore(rootReducer , applyMiddleware(thunk))