import React from 'react';
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";
const validate = values => {
    const errors = {};

    if (!values.login) {
        errors.login = 'Это поле обязательное';
    }
    if (!values.password) {
        errors.password = 'Это поле обязательное';
    }
    return errors;
};

const LoginForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                   id="login"
                   name="login"
                   placeholder="Логин"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.login}
            />
            {formik.touched.login && formik.errors.login ? (
                <div >{formik.errors.login}</div>
            ) : null}

            <input
                   id="password"
                   name="password"
                   placeholder="Пароль"
                   type="password"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}

            <div>
                <button type="submit">Войти</button>
                <NavLink to={"/registration"}>Еще нет аккаунта? Создайте</NavLink>
            </div>
        </form>
    );
};

export default LoginForm;