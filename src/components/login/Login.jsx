import React from 'react';
import LoginForm from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {login} from "../../redux/authReducer";

const Login = () => {
    let isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch(login(formData.login, formData.password));
    }
    if (isAuth) return <Navigate replace to={'/profile'}/>

    return (
        <div>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;