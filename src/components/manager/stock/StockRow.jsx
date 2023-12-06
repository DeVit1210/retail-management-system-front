import React from "react";
import { useNavigate } from "react-router-dom"

const StockRow = ({item}) => {
    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate(`/stocks/edit/${item.id}`);
    };

    return (
        <tr key={item.id} onClick={handleRowClick}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.weight}</td>
            <td>{item.purchaseCost}</td>
        </tr>
    )
}

export default StockRow
