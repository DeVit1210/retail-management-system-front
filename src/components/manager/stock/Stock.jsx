import React, {useEffect} from "react";
import StockTable from "./StockTable";
import {useDispatch, useSelector} from "react-redux";
import {getAllMaterials} from "../../../redux/materialReducer";
import {Link} from "react-router-dom";

const Stock = () => {
    const dispatch = useDispatch();
    const materials = useSelector((state) => state.materials.materials);

    useEffect(() => {
        dispatch(getAllMaterials());
    }, []);

    return (
        <div>
            <div>
                <h1>Товары</h1>
                <button>
                    <Link to={'/stocks/add'}>Добавить</Link>
                </button>
            </div>
            <div>
                <StockTable materials={materials}/>
            </div>
        </div>
    )
}

export default Stock;