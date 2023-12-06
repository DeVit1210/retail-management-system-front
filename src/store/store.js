import {configureStore} from '@reduxjs/toolkit';
import authReducer from "../redux/authReducer";
import materialReducer from "../redux/materialReducer";


let store=configureStore({
    reducer: {
        auth: authReducer,
        materials: materialReducer
    }
});
window.store=store;
export default store;