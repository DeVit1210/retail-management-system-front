import React from "react";
import {useFormik} from "formik";

const validate = (values) => {
    const errors = {};

    if (!values.login) {
        errors.login = 'Это поле обязательное';
    }
    if (!values.password) {
        errors.password = 'Это поле обязательное';
    }
    return errors;
};

const StockCreatorForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            weight: 0,
            purchaseCost: 0
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="name"
                name="name"
                placeholder="Имя"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div >{formik.errors.name}</div>
            ) : null}

            <input
                id="weight"
                name="weight"
                placeholder="Вес"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weight}
            />
            {formik.touched.weight && formik.errors.weight ? (
                <div>{formik.errors.weight}</div>
            ) : null}

            <input
                id="purchaseCost"
                name="purchaseCost"
                placeholder="Цена покупки"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.purchaseCost}
            />
            {formik.touched.purchaseCost && formik.errors.purchaseCost ? (
                <div>{formik.errors.purchaseCost}</div>
            ) : null}

            <div>
                <button type="submit">Добавить</button>
            </div>
        </form>
    );
};


export default StockCreatorForm
