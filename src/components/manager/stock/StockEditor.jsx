import React from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const StockEditor = () => {
    const {id} = useParams()
    const materialList = useSelector(state => state.materials.materials)
    const material = materialList.find(material => material.id === id);
    return (
        <div>
            <h1>Edited material id: {id}</h1>
            <h1>{material.name}</h1>
            <h1>{material.weight}</h1>
            <h1>{material.purchaseCost}</h1>
            <button>
                <Link to={"/stocks"}>Вернуться к материалам</Link>
            </button>
        </div>
    )
}

export default StockEditor
