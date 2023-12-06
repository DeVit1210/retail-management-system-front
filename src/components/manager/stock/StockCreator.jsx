import React from "react";
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";
import StockCreatorForm from "./StockCreatorForm";
import {useDispatch} from "react-redux";
import {addMaterial} from "../../../redux/materialReducer";


const StockCreator = () => {
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        console.log(formData)
        dispatch(addMaterial(formData))
    }
    return(
        <div>
            <StockCreatorForm onSubmit={onSubmit}/>
        </div>
    )
};

export default StockCreator
