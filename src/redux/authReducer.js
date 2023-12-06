import {authApi} from "../api/api";
import Cookies from 'js-cookie';

const LOGIN_USER = 'LOGIN_USER';

const initialState = {
    role: '',
    isAuth: false,
}

const authReducer = (state=initialState, action) => {
    switch (action.type){
        case LOGIN_USER:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        default: return state;
    }
}

export const login = (login, password) => async (dispatch) => {
    let response = await authApi.login(login, password);
    console.log(response)
    if(response.authenticationToken){
        Cookies.set('jwt', response.authenticationToken)
        dispatch(loginUser(response.authority));
    }
}

export const loginUser = (role) => {
    return {
        type: LOGIN_USER,
        payload: {role}
    }
}

export default authReducer;


