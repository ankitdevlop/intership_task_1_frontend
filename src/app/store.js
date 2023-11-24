import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSclies'

export default configureStore({
    reducer:{
        user:userReducer
    }
})