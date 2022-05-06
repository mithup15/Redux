import {  configureStore } from '@reduxjs/toolkit';
import userr from "./userslice"
export default configureStore({
    reducer:{
        user:userr
    }
});