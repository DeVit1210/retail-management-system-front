import React from "react";
import StockRow from "./StockRow";

const StockTable = ({materials}) => {
    return (
        <table>
            <tr>
                <td>ID</td>
                <td>Название</td>
                <td>Вес (1 ед.)</td>
                <td>Цена закупки</td>
            </tr>
            <tbody>
                {materials.map((item) => (<StockRow item={item}/>))}
            </tbody>
        </table>
    )
}

export default StockTable