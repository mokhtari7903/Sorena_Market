import {configureStore} from "@reduxjs/toolkit";
import managerSlice from './Slice'
export const store = configureStore({
    reducer:{
        dataManager:managerSlice
    }
})