import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

configureStore({
    reducer:{
        user:UserSlice.reducer
    }
})