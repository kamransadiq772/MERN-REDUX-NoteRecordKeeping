import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer, userRegistraionReducer } from './Reducers/userReducers'

const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister: userRegistraionReducer
})

const userInfoFromStorage = localStorage.getItem('userinfo')
? JSON.parse(localStorage.getItem('userinfo'))
:null

const initialState = {
    userLogin : {userInfo:userInfoFromStorage},
}

const middleware = [thunk]

const store = createStore(reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
) //1.reducer 2.preloaded state 3.middleware

export default store;