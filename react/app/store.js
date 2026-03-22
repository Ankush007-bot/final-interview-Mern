import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cmn from './cmn'

const rootReducer= combineReducers({
// contains all the reducers
cmn: cmn,
})
const initialState={}

 const store = configureStore({
    reducer: rootReducer,

})


export default store